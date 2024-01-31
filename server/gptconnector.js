const OpenAI = require("openai");

exports.gptConnector = class gptConnector {
    constructor() {
        this.openai = new OpenAI();
    }

    async genSentence(lang, sent, words) {
        const response = await this.openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    "role": "user",
                    "content": `Translate the sentence \"${sent}\" to ${lang} using words ${JSON.stringify(words)}`
                }
            ],
            temperature: 0.2,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        let res = response.choices[0].message.content
        res = res.replace(/[\"\.]/g, "")
        return res
    }

    async checkTranslation(sent_org, sent_trans, lang1, lang2) {
        let msg = ''
        let format = '{ "isCorrect": boolean, "explanation": string }'
        switch (lang2) {
            case 'pl':
                let lpl = ''
                switch (lang1) {
                    case 'tr':
                        lpl = 'turecki'
                        break
                    case 'en':
                        lpl = 'angielski'
                        break
                    case 'cs':
                        lpl = 'czeski'
                        break
                }
                msg = `Czy \"${sent_org}.\" to poprawne tłumaczenie zdania \"${sent_trans}.\" na ${lpl}? Odpowiedz w formacie ${format}. Nie sprawdzaj sensu zdania ani nie bądź zbyt restrykcyjny względem kolejności słów, synonimów czy drobnych błędów.`
                break
            case 'cs':
                let lcs = ''
                switch (lang1) {
                    case 'tr':
                        lcs = 'turečtiny'
                        break
                    case 'en':
                        lcs = 'angličtiny'
                        break
                    case 'pl':
                        lcs = 'polštiny'
                        break
                }
                msg = `Je \"${sent_org}.\" spravný překlad věty \"${sent_trans}.\" do ${lcs}? Odpověď ve formatě ${format}. Nekontroluj smyslu věty a nebuď příliš restriktivní vzhledem k sekvenci slov, synonymom nebo malým chybom.`
                break
            case 'en':
                let len = ''
                switch (lang1) {
                    case 'tr':
                        len = 'Turkish'
                        break
                    case 'pl':
                        len = 'Polish'
                        break
                    case 'cs':
                        len = 'Czech'
                        break
                }
                msg = `Is \"${sent_org}.\" a correct translation of \"${sent_trans}.\" to ${len}? Answer in format ${format}. Don't check the sense of this sentence nor be too strict with word order, synonyms and petty mistakes.`
                break
            case 'tr':
                let ltr = ''
                switch (lang1) {
                    case 'pl':
                        ltr = 'lehçe'
                        break
                    case 'en':
                        ltr = 'ingilizce'
                        break
                    case 'cs':
                        ltr = 'çekçe'
                        break
                }
                msg = `\"${sent_org}.\" \"${sent_trans}.\"\'yin ${ltr}\'yeki doğru çevresi mi? Bu formatta cevap ver ${format}. Bu cümlenin anlamını kontrol etmeyin ve kelime sırası, eş anlamlılar ve küçük hatalar konusunda çok katı olmayın.`
                break
        }

        console.log(msg)

        const response = await this.openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    "role": "user",
                    "content": msg
                }
            ],
            temperature: 0.2,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        let res = response.choices[0].message.content
        return JSON.parse(res)
    }
}