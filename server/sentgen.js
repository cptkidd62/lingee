const trgen = require('./trgen')
const engen = require('./engen')

patterns = ['tohave', 'dosth']
tenses = ['pastsimple', 'pastcont', 'pressimple', 'prescont', 'futuresimple']

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function getRandomNum(b, e) {
    return b + Math.floor(Math.random() * (e - b))
}

function genRandomPattern() {
    let p = getRandomElement(patterns)
    switch (p) {
        case 'tohave':
            return [p, [[[], getRandomNum(0, 7)], getRandomNum(1, 4), getRandomNum(0, 2), {
                tense: getRandomElement(tenses),
                negation: getRandomNum(0, 1)
            }]]
        case 'dosth':
            return [p, [[[], getRandomNum(0, 7)], getRandomNum(0, 6), {
                tense: getRandomElement(tenses),
                negation: getRandomNum(0, 1),
                person: getRandomNum(1, 4),
                singular: getRandomNum(0, 2)
            }]]
    }
}

exports.Generator = class Generator {
    constructor() {
        this.langs = {
            tr: new trgen.Turkish(),
            en: new engen.English(),
        }
    }
    pattern1 = ['tohave', [[['nounplural'], 2], 1, true, {
        tense: 'pastsimple',
        negation: false,
    }]]
    pattern2 = ['dosth', [[[], 6], 1, {
        tense: 'pastsimple',
        negation: false,
        person: 1,
        singular: true,
    }]]
    pattern3 = ['dosth', [[[], 6], 1, {
        tense: 'pressimple',
        negation: false,
        person: 3,
        singular: true,
    }]]
    getFromPattern(lang, pattern) {
        return this.langs[lang][pattern[0]](...pattern[1])
    }
    getRandomSentence(lang1, lang2) {
        let p = genRandomPattern()
        console.log(p)
        return {
            original: this.langs[lang1][p[0]](...p[1]),
            translation: this.langs[lang2][p[0]](...p[1])
        }
    }
}