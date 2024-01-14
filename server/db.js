const { Pool } = require("pg");

exports.Repository = class Repository {
    pool = null;
    constructor() {
        this.pool = new Pool({
            user: "cptkidd",
            host: "localhost",
            database: "lingeedb",
            port: 5432,
        });
    }

    async addUsr(usr) {
        await this.pool.query("INSERT INTO users (u_login, u_displayname, u_email, u_password) VALUES ($1, $2, $3, $4)",
            [usr.login, usr.displayname, usr.email, usr.password]);
    }

    async loginExists(usrlogin) {
        let data = await this.pool.query("SELECT u_id FROM users WHERE u_email = $1", [usrlogin]);
        if (data.rows.length != 0) {
            return true;
        } else {
            return false;
        }
    }

    async emailExists(usremail) {
        let data = await this.pool.query("SELECT u_id FROM users WHERE u_email = $1", [usremail]);
        if (data.rows.length != 0) {
            return true;
        } else {
            return false;
        }
    }

    async getPasswordForUsr(usrlogin) {
        let data = await this.pool.query("SELECT u_id, u_password FROM users WHERE u_login = $1", [usrlogin]);
        console.log(data.rows);
        if (data.rows.length != 0) {
            return { id: data.rows[0].u_id, pwdHsh: data.rows[0].u_password };
        }
        else {
            return { id: null, pwdHsh: null };
        }
    }

    async getAccountForUsr(usrid) {
        let data = await this.pool.query("SELECT u_displayname, u_login FROM users WHERE u_id = $1", [usrid]);
        if (data.rows.length != 0) {
            return { id: usrid, displayname: data.rows[0].u_displayname, login: data.rows[0].u_login };
        }
        else {
            return null;
        }
    }

    async getAllTopics() {
        let data1 = await this.pool.query("SELECT * FROM topics_grammar");
        let data2 = await this.pool.query("SELECT * FROM topics_lexical");
        return { grammar: data1.rows, lexical: data2.rows };
    }

    async getSpeechPartIDs(sp) {
        let data = await this.pool.query("SELECT v_id FROM vocab WHERE v_speechpart = $1", [sp])
        return data.rows
    }

    async getWordInfo(lang, sp, id) {
        let table = lang + '_' + sp + 's'
        let data
        switch (table) {
            case 'tr_verbs':
                data = await this.pool.query("SELECT * FROM tr_verbs WHERE v_id = $1", [id])
                break
            case 'en_verbs':
                data = await this.pool.query("SELECT * FROM en_verbs WHERE v_id = $1", [id])
                break
            case 'tr_adverbs':
                data = await this.pool.query("SELECT * FROM tr_adverbs WHERE v_id = $1", [id])
                break
            case 'en_adverbs':
                data = await this.pool.query("SELECT * FROM en_adverbs WHERE v_id = $1", [id])
                break
            case 'tr_adjectives':
                data = await this.pool.query("SELECT * FROM tr_adjectives WHERE v_id = $1", [id])
                break
            case 'en_adjectives':
                data = await this.pool.query("SELECT * FROM en_adjectives WHERE v_id = $1", [id])
                break
            case 'tr_nouns':
                data = await this.pool.query("SELECT * FROM tr_nouns WHERE v_id = $1", [id])
                break
            case 'en_nouns':
                data = await this.pool.query("SELECT * FROM en_nouns WHERE v_id = $1", [id])
                break
            case 'tr_numerals':
                data = await this.pool.query("SELECT * FROM tr_numerals WHERE v_id = $1", [id])
                break
            case 'en_numerals':
                data = await this.pool.query("SELECT * FROM en_numerals WHERE v_id = $1", [id])
                break
        }
        return (data.rows[0])
    }
}