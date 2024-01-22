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
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        let res = response.choices[0].message.content
        res = res.replace(/\"/g, "")
        return res
    }

    async checkTranslation(sent_org, sent_trans, lang1, lang2) {
        let msg = ''
        let format = '{ isCorrect: boolean, explanation: string }'
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
                msg = `Czy \"${sent_org}\" to poprawne tłumaczenie zdania \"${sent_trans}\" na ${lpl}? Odpowiedz w formacie `
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
                msg = `Je \"${sent_org}\" spravný překlad věty \"${sent_trans}\" do ${lcs}? Odpověď ve formatě `
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
                msg = `Is \"${sent_org}\" a correct translation of \"${sent_trans}\" to ${len}? Answer in format `
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
                msg = `\"${sent_org}\" \"${sent_trans}\"\'yin ${ltr}\'yeki doğru çevresi mi? Bu formatta cevap ver `
                break
        }
        msg += format

        const response = await this.openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    "role": "user",
                    "content": msg
                }
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        let res = response.choices[0].message.content
        return JSON.parse(res)
    }
}