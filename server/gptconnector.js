const OpenAI = require("openai");

exports.gptConnector = class gptConnector {
    constructor() {
        this.openai = new OpenAI();
    }

    async genSentence(lang, sent, words) {
        const response = await this.openai.chat.completions.create({
            model: "gpt-3.5-turbo",
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
        return response.choices[0].message.content
    }

    async checkTranslation() {}
}