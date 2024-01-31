const engen = require('./engen')
const trgen = require('./trgen')
const gpt = require('./gptconnector')

var repo

exports.Czech = class Czech {
    constructor(dbrepo) {
        repo = dbrepo
        this.en = new engen.English()
        this.tr = new trgen.Turkish()
        this.gptconn = new gpt.gptConnector()
    }
    async run(pattern) {
        let en_v = await this.en.run(pattern)
        let usedwords = []
        let p = pattern[0]
        switch (p) {
            case 'tobe':
                let np1 = pattern[1]
                usedwords.push(await repo.getWordInfo('cs', 'noun', np1[1]))
                await Promise.all(np1[0].adjectives.map(async a => {
                    usedwords.push(await repo.getWordInfo('cs', 'adjective', a))
                    return a
                }))
                await Promise.all(pattern[2].adverbs.map(async a => {
                    usedwords.push(await repo.getWordInfo('cs', 'adverb', a))
                    return a
                }))
                usedwords.push('být')
                break
            case 'tohave':
                let np2 = pattern[1]
                usedwords.push(await repo.getWordInfo('cs', 'noun', np2[1]))
                await Promise.all(np2[0].adjectives.map(async a => {
                    usedwords.push(await repo.getWordInfo('cs', 'adjective', a))
                    return a
                }))
                await Promise.all(pattern[2].adverbs.map(async a => {
                    usedwords.push(await repo.getWordInfo('cs', 'adverb', a))
                    return a
                }))
                usedwords.push('mít')
                break
            case 'dosth':
                let np3 = pattern[1]
                usedwords.push(await repo.getWordInfo('cs', 'noun', np3[1]))
                await Promise.all(np3[0].adjectives.map(async a => {
                    usedwords.push(await repo.getWordInfo('cs', 'adjective', a))
                    return a
                }))
                await Promise.all(pattern[2].adverbs.map(async a => {
                    usedwords.push(await repo.getWordInfo('cs', 'adverb', a))
                    return a
                }))
                usedwords.push(await repo.getWordInfo('cs', 'verb', pattern[3][0]))
                break
        }
        return await this.gptconn.genSentence('Czech', en_v, usedwords)
    }
}
