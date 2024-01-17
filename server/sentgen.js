const trgen = require('./trgen')
const engen = require('./engen')
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

async function genRandomPattern(uid, noun, verb, adjective, adverb, numeral) {
    let p, n, v, adj, adv, num
    if (verb || adverb) {
        p = 'dosth'
    } else {
        p = getRandomElement(patterns)
    }
    if (verb) {
        v = verb
    } else {
        v = getRandomElement(await repo.getSpeechPartIDs('verb')).v_id
    }
    if (noun) {
        n = noun
    } else {
        n = getRandomElement(await repo.getSpeechPartIDs('noun')).v_id
    }
    if (adjective) {
        adj = adjective
    } else {
        adj = getRandomElement(await repo.getSpeechPartIDs('adjective')).v_id
    }
    if (adverb) {
        adv = adverb
    } else {
        adv = getRandomElement(await repo.getSpeechPartIDs('adverb')).v_id
    }
    if (numeral) {
        num = numeral
    } else {
        num = getRandomElement(await repo.getSpeechPartIDs('numeral')).v_id
    }
    switch (p) {
        case 'tobe':
            return [p, [{
                plural: false,
                adjectives: [adj],
                count: undefined,
                definite: getRandomNum(0, 2),
                possession: undefined,
                case: undefined
            }, n], {
                    tense: getRandomElement(tensessimple),
                    negation: getRandomNum(0, 1),
                    person: getRandomNum(1, 4),
                    singular: getRandomNum(0, 2),
                    adverbs: []
                }, []]
        case 'tohave':
            return [p, [{
                plural: getRandomNum(0, 2),
                adjectives: [adj],
                count: undefined,
                definite: getRandomNum(0, 2),
                possession: undefined,
                case: undefined
            }, n], {
                    tense: getRandomElement(tensessimple),
                    negation: getRandomNum(0, 1),
                    adverbs: []
                }, [getRandomNum(1, 4), getRandomNum(0, 2)]]
        case 'dosth':
            return [p, [{
                plural: getRandomNum(0, 2),
                adjectives: [adj],
                count: undefined,
                definite: getRandomNum(0, 2),
                possession: undefined,
                case: undefined
            }, n], {
                    tense: getRandomElement(tenses),
                    negation: getRandomNum(0, 1),
                    person: getRandomNum(1, 4),
                    singular: getRandomNum(0, 2),
                    adverbs: [adv]
                }, [v]]
    }
}

exports.Generator = class Generator {
    constructor(dbrepo) {
        repo = dbrepo
        this.langs = {
            tr: new trgen.Turkish(dbrepo),
            en: new engen.English(dbrepo),
        }
    }
    async getRandomSentence(lang1, lang2, uid, noun, verb, adj, adv, num) {
        let p = await genRandomPattern(uid, noun, verb, adj, adv, num)
        // console.log(p)
        return {
            original: await this.langs[lang1].run(p),
            translation: await this.langs[lang2].run(p)
        }
    }
    async getNRandomSentences(n, lang1, lang2, uid, noun, verb, adj, adv, num) {
        let res = []
        for (let i = 0; i < n; i++) {
            res[i] = await this.getRandomSentence(lang1, lang2, uid, noun, verb, adj, adv, num)
        }
        return res
    }
}