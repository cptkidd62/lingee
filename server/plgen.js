const engen = require('./engen')
const trgen = require('./trgen')
const gpt = require('./gptconnector')

var repo

exports.Polish = class Polish {
    constructor(dbrepo) {
        repo = dbrepo
        this.en = new engen.English()
        this.tr = new trgen.Turkish()
        this.gptconn = new gpt.gptConnector()
    }
    async run(pattern) {
        let en_v = await this.tr.run(pattern)
        let usedwords = []
        let p = pattern[0]
        switch (p) {
            case 'tobe':
                let np1 = pattern[1]
                usedwords.push(await repo.getWordInfo('pl', 'noun', np1[1]))
                await Promise.all(np1[0].adjectives.map(async a => {
                    usedwords.push(await repo.getWordInfo('pl', 'adjective', a))
                    return a
                }))
                await Promise.all(pattern[2].adverbs.map(async a => {
                    usedwords.push(await repo.getWordInfo('pl', 'adverb', a))
                    return a
                }))
                usedwords.push('być')
                break
            case 'tohave':
                let np2 = pattern[1]
                usedwords.push(await repo.getWordInfo('pl', 'noun', np2[1]))
                await Promise.all(np2[0].adjectives.map(async a => {
                    usedwords.push(await repo.getWordInfo('pl', 'adjective', a))
                    return a
                }))
                await Promise.all(pattern[2].adverbs.map(async a => {
                    usedwords.push(await repo.getWordInfo('pl', 'adverb', a))
                    return a
                }))
                usedwords.push('mieć')
                break
            case 'dosth':
                let np3 = pattern[1]
                usedwords.push(await repo.getWordInfo('pl', 'noun', np3[1]))
                await Promise.all(np3[0].adjectives.map(async a => {
                    usedwords.push(await repo.getWordInfo('pl', 'adjective', a))
                    return a
                }))
                await Promise.all(pattern[2].adverbs.map(async a => {
                    usedwords.push(await repo.getWordInfo('pl', 'adverb', a))
                    return a
                }))
                usedwords.push(await repo.getWordInfo('pl', 'verb', pattern[3][0]))
                break
        }
        return await this.gptconn.genSentence('Polish', en_v, usedwords)
    }
}
