const trgen = require('./trgen')
const engen = require('./engen')

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function getRandomNum(b, e) {
    return b + Math.floor(Math.random() * (e - b))
}

exports.Generator = class Generator {
    // getRandomSentence() { let s = entohave(); console.log(s); return s }
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
}