const trgen = require('./trgen')
const engen = require('./engen')
const plgen = require('./plgen')
const csgen = require('./csgen')
var repo

patterns = ['tobe', 'tohave', 'dosth']
tensessimple = ['pastsimple', 'pressimple', 'futuresimple']
tensescont = ['pastcont', 'prescont']
tenses = tensessimple

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function getRandomNum(b, e) {
    return b + Math.floor(Math.random() * (e - b))
}

async function genRandomPattern(uid, noun, verb, adjective, adverb, numeral) {
    let p, n, v, adj, adv, num, tense, pl
    if (numeral) {
        num = numeral - 146
    } else {
        num = getRandomNum(0, 4) ? undefined : getRandomElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    }
    if (num == undefined) {
        pl = getRandomNum(0, 2)
    } else if (num == 1) {
        pl = false
    } else {
        pl = true
    }
    if (verb || adverb) {
        p = 'dosth'
    } else if (num == 0) {
        p = 'tohave'
    } else if (numeral) {
        p = getRandomElement(['tohave', 'dosth'])
    } else {
        p = getRandomElement(patterns)
    }
    if (adverb) {
        adv = adverb
    } else {
        adv = getRandomElement(await repo.getSpeechPartIDs('adverb')).v_id
    }
    if ([135, 138, 139].includes(adv)) {
        tense = getRandomElement(['pastsimple'])
    } else if ([140, 141, 137].includes(adv)) {
        tense = 'futuresimple'
    } else {
        if (p == 'dosth') {
            tense = getRandomElement(tenses)
        } else {
            tense = getRandomElement(tensessimple)
        }
    }
    if (adjective) {
        adj = adjective
        n = getRandomElement(await repo.getNounsMatchingAdj(adj)).noun_id
        v = getRandomElement(await repo.getVerbsMatchingNoun(n)).verb_id
    } else if (noun) {
        n = noun
        aas = await repo.getAdjsMatchingNoun(n)
        if (aas.length != 0) {
            adj = getRandomElement(aas).adj_id
        } else {
            adj = getRandomElement(await repo.getSpeechPartIDs('adjective')).v_id
        }
        v = getRandomElement(await repo.getVerbsMatchingNoun(n)).verb_id
    } else if (verb) {
        v = verb
        nns = await repo.getNounsMatchingVerb(v)
        if (nns.length != 0) {
            n = getRandomElement(nns).noun_id
        } else {
            n = getRandomElement(await repo.getSpeechPartIDs('noun')).v_id
        }
        aas = await repo.getAdjsMatchingNoun(n)
        if (aas.length != 0) {
            adj = getRandomElement(aas).adj_id
        } else {
            adj = getRandomElement(await repo.getSpeechPartIDs('adjective')).v_id
        }
    } else {
        v = getRandomElement(await repo.getSpeechPartIDs('verb')).v_id
        nns = await repo.getNounsMatchingVerb(v)
        if (nns.length != 0) {
            n = getRandomElement(nns).noun_id
        } else {
            n = getRandomElement(await repo.getSpeechPartIDs('noun')).v_id
        }
        aas = await repo.getAdjsMatchingNoun(n)
        if (aas.length != 0) {
            adj = getRandomElement(aas).adj_id
        } else {
            adj = getRandomElement(await repo.getSpeechPartIDs('adjective')).v_id
        }
    }
    switch (p) {
        case 'tobe':
            return [p, [{
                plural: pl,
                adjectives: [adj],
                count: num,
                definite: getRandomNum(0, 2),
                possession: undefined,
                case: undefined
            }, n], {
                    tense: tense,
                    negation: getRandomNum(0, 1),
                    person: getRandomNum(1, 4),
                    singular: getRandomNum(0, 2),
                    adverbs: []
                }, []]
        case 'tohave':
            return [p, [{
                plural: pl,
                adjectives: [adj],
                count: num,
                definite: getRandomNum(0, 2),
                possession: undefined,
                case: undefined
            }, n], {
                    tense: tense,
                    negation: getRandomNum(0, 1),
                    adverbs: []
                }, [getRandomNum(1, 4), getRandomNum(0, 2)]]
        case 'dosth':
            return [p, [{
                plural: pl,
                adjectives: [adj],
                count: num,
                definite: getRandomNum(0, 2),
                possession: undefined,
                case: undefined
            }, n], {
                    tense: tense,
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
            pl: new plgen.Polish(dbrepo),
            cs: new csgen.Czech(dbrepo),
            tr: new trgen.Turkish(dbrepo),
            en: new engen.English(dbrepo),
        }
    }
    async getRandomSentence(lang1, lang2, uid, noun, verb, adj, adv, num) {
        let p = await genRandomPattern(uid, noun, verb, adj, adv, num)
        console.log(p)
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