const trgen = require('./trgen')
const engen = require('./engen')

patterns = ['tohave', 'dosth']
tensessimple = ['pastsimple', 'pressimple', 'futuresimple']
tensescont = ['pastcont', 'prescont']
tenses = tensessimple.concat(tensescont)

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
            return [p, [{
                plural: getRandomNum(0, 2),
                adjectives: [],
                count: undefined,
                definite: getRandomNum(0, 2),
                possession: undefined,
                case: undefined
            }, getRandomNum(0, 7)], [getRandomNum(1, 4), getRandomNum(0, 2), {
                tense: getRandomElement(tensessimple),
                negation: getRandomNum(0, 1)
            }]]
        case 'dosth':
            return [p, [{
                plural: getRandomNum(0, 2),
                adjectives: [],
                count: undefined,
                definite: getRandomNum(0, 2),
                possession: undefined,
                case: undefined
            }, getRandomNum(0, 7)], [getRandomNum(0, 6), {
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
    pattern1 = ['tohave', [{
        plural: true,
        adjectives: [],
        count: 4,
        definite: false,
        possession: undefined,
        case: undefined
    }, 2], [1, true, {
        tense: 'pastsimple',
        negation: false,
    }]]
    pattern2 = ['dosth', [{
        plural: true,
        adjectives: [],
        count: undefined,
        definite: true,
        possession: undefined,
        case: undefined
    }, 6], [1, {
        tense: 'pastsimple',
        negation: false,
        person: 1,
        singular: true,
    }]]
    pattern3 = ['dosth', [{
        plural: false,
        adjectives: [1],
        count: undefined,
        definite: false,
        possession: [1, false],
        case: undefined
    }, 6], [1, {
        tense: 'pressimple',
        negation: false,
        person: 3,
        singular: true,
    }]]
    getFromPattern(lang, pattern) {
        return this.langs[lang].run(pattern)
    }
    getRandomSentence(lang1, lang2) {
        let p = genRandomPattern()
        console.log(p)
        return {
            original: this.langs[lang1].run(p),
            translation: this.langs[lang2].run(p)
        }
    }
}