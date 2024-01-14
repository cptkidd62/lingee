const trgen = require('./trgen')
const engen = require('./engen')
const dbrepo = require("./db")
var repo

patterns = ['tobe', 'tohave', 'dosth']
tensessimple = ['pastsimple', 'pressimple', 'futuresimple']
tensescont = ['pastcont', 'prescont']
tenses = tensessimple.concat(tensescont)

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function getRandomNum(b, e) {
    return b + Math.floor(Math.random() * (e - b))
}

async function genRandomPattern() {
    let p = getRandomElement(patterns)
    switch (p) {
        case 'tobe':
            let n1 = getRandomElement(await repo.getSpeechPartIDs('noun')).v_id
            let adj1 = getRandomElement(await repo.getSpeechPartIDs('adjective')).v_id
            return [p, [{
                plural: false,
                adjectives: [adj1],
                count: undefined,
                definite: getRandomNum(0, 2),
                possession: undefined,
                case: undefined
            }, n1], {
                    tense: getRandomElement(tensessimple),
                    negation: getRandomNum(0, 1),
                    person: getRandomNum(1, 4),
                    singular: getRandomNum(0, 2),
                    adverbs: []
                }, []]
        case 'tohave':
            let n2 = getRandomElement(await repo.getSpeechPartIDs('noun')).v_id
            let adj2 = getRandomElement(await repo.getSpeechPartIDs('adjective')).v_id
            return [p, [{
                plural: getRandomNum(0, 2),
                adjectives: [adj2],
                count: undefined,
                definite: getRandomNum(0, 2),
                possession: undefined,
                case: undefined
            }, n2], {
                    tense: getRandomElement(tensessimple),
                    negation: getRandomNum(0, 1),
                    adverbs: []
                }, [getRandomNum(1, 4), getRandomNum(0, 2)]]
        case 'dosth':
            let n3 = getRandomElement(await repo.getSpeechPartIDs('noun')).v_id
            let adj3 = getRandomElement(await repo.getSpeechPartIDs('adjective')).v_id
            let v3 = getRandomElement(await repo.getSpeechPartIDs('verb')).v_id
            return [p, [{
                plural: getRandomNum(0, 2),
                adjectives: [adj3],
                count: undefined,
                definite: getRandomNum(0, 2),
                possession: undefined,
                case: undefined
            }, n3], {
                    tense: getRandomElement(tenses),
                    negation: getRandomNum(0, 1),
                    person: getRandomNum(1, 4),
                    singular: getRandomNum(0, 2),
                    adverbs: []
                }, [v3]]
    }
}

exports.Generator = class Generator {
    constructor() {
        repo = new dbrepo.Repository()
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
    }, 2], {
            tense: 'pastsimple',
            negation: false,
            adverbs: []
        }, [1, true]]
    pattern2 = ['dosth', [{
        plural: true,
        adjectives: [],
        count: undefined,
        definite: true,
        possession: undefined,
        case: undefined
    }, 6], {
            tense: 'pastsimple',
            negation: false,
            person: 1,
            singular: true,
            adverbs: [1]
        }, [1]]
    pattern3 = ['dosth', [{
        plural: false,
        adjectives: [1],
        count: undefined,
        definite: false,
        possession: [1, false],
        case: undefined
    }, 6], {
            tense: 'pressimple',
            negation: false,
            person: 3,
            singular: true,
            adverbs: []
        }, [1]]
    pattern4 = ['tobe', [{
        plural: false,
        adjectives: [0],
        count: undefined,
        definite: true,
        possession: [1, true],
        case: undefined
    }, 0], {
            tense: 'pressimple',
            negation: false,
            person: 2,
            singular: true,
            adverbs: []
        }, []]
    pattern5 = ['tobe', [{
        plural: false,
        adjectives: [],
        count: undefined,
        definite: false,
        possession: undefined,
        case: 'loc'
    }, 2], {
            tense: 'pastsimple',
            negation: false,
            person: 3,
            singular: false,
            adverbs: []
        }, []]
    getFromPattern(lang, pattern) {
        return this.langs[lang].run(pattern)
    }
    async getRandomSentence(lang1, lang2) {
        let p = await genRandomPattern()
        console.log(p)
        return {
            original: await this.langs[lang1].run(p),
            translation: await this.langs[lang2].run(p)
        }
    }
    async getNRandomSentences(n, lang1, lang2) {
        let res = []
        for (let i = 0; i < n; i++) {
            res[i] = await this.getRandomSentence(lang1, lang2)
        }
        return res
    }
}