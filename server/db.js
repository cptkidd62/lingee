const { Pool } = require("pg");

exports.Repository = class Repository {
    pool = null;
    constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME,
            port: 5432,
            ssl: true
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

    async getUsrPreferences(usrid) {
        let data = await this.pool.query("select last_course_code, ui_code\
                from user_preferences\
                where u_id = $1", [usrid])
        return data.rows[0]
    }

    async setUsrPreferences(usrid, c_code, ui_code) {
        await this.pool.query("update user_preferences set last_course_code = $1, ui_code = $2 where u_id = $3", [c_code, ui_code, usrid])
    }

    async addUsrPreferences(usrid, c_code, ui_code) {
        await this.pool.query("insert into user_preferences (u_id, last_course_code, ui_code)\
                values ($1, $2, $3) on conflict (u_id) do nothing", [usrid, c_code, ui_code])
    }

    async getAllTopics() {
        let data1 = await this.pool.query("SELECT * FROM topics_grammar");
        let data2 = await this.pool.query("SELECT * FROM topics_lexical");
        return { grammar: data1.rows, lexical: data2.rows };
    }

    async getWordsFromTopic(lang, tl_id, u_id) {
        let data1 = await this.pool.query("SELECT tl_type FROM topics_lexical WHERE tl_id = $1", [tl_id])
        let table = lang + '_' + data1.rows[0].tl_type
        let data2 = await this.pool.query("select ta.v_id, ta.word, uvp.progress, v.v_speechpart as speechpart from " +
            table + " ta\
                    join vocab_topics vt on ta.v_id = vt.v_id\
                    left join (select * from user_vocab_progress uvp where uvp.u_id = $1 and uvp.l_code = $2) as uvp on uvp.v_id = ta.v_id\
                    join vocab v on v.v_id = vt.v_id\
                    where vt.tl_id = $3", [u_id, lang, tl_id])
        return data2.rows
    }

    async getSpeechPartIDs(sp) {
        let data = await this.pool.query("SELECT v_id FROM vocab WHERE v_speechpart = $1", [sp])
        return data.rows
    }

    async getAdjsMatchingNoun(n_id) {
        let data = await this.pool.query("SELECT adj_id FROM noun_adj_constraints WHERE noun_id = $1", [n_id])
        return data.rows
    }

    async getNounsMatchingAdj(a_id) {
        let data = await this.pool.query("SELECT noun_id FROM noun_adj_constraints WHERE adj_id = $1", [a_id])
        return data.rows
    }

    async getNounsMatchingVerb(v_id) {
        let data = await this.pool.query("SELECT noun_id FROM verb_noun_constraints WHERE verb_id = $1", [v_id])
        return data.rows
    }

    async getVerbsMatchingNoun(n_id) {
        let data = await this.pool.query("SELECT verb_id FROM verb_noun_constraints WHERE noun_id = $1", [n_id])
        return data.rows
    }

    async getWordInfo(lang, sp, id) {
        let table = lang + '_' + sp + 's'
        let data = await this.pool.query("SELECT * FROM " + table + " WHERE v_id = $1", [id])
        return (data.rows[0])
    }

    async addWordToReviews(lang, u_id, v_id) {
        await this.pool.query("INSERT INTO user_vocab_progress (u_id, v_id, progress, l_code)\
                VALUES ($1, $2, 1, $3) on conflict (u_id, v_id, l_code) do nothing", [u_id, v_id, lang])
    }

    async getAllReviewsCount(u_id) {
        let data = await this.pool.query("select l_code, count(*)\
                from user_vocab_progress\
                where u_id = $1 and next_review <= current_date\
                group by l_code", [u_id])
        return data.rows
    }

    async getReviewsCount(lang, u_id) {
        let data = await this.pool.query("select next_review, count(*)\
                from user_vocab_progress\
                where u_id = $1 and l_code = $2\
                group by next_review\
                order by next_review asc\
                limit 20", [u_id, lang])
        return data.rows
    }

    async getReviews(lang, u_id) {
        let data = await this.pool.query("select uvp.v_id, null as word, uvp.progress, tl.tl_type as speechpart from\
                (select uvp.v_id as v_id, uvp.progress as progress from user_vocab_progress uvp\
                where uvp.u_id = $1 and uvp.l_code = $2 and uvp.next_review <= current_date) as uvp\
                join vocab_topics vt on uvp.v_id = vt.v_id\
                join topics_lexical tl on vt.tl_id = tl.tl_id", [u_id, lang])
        return data.rows
    }

    async updateWordReviews(lang, u_id, v_id, correct) {
        if (correct) {
            await this.pool.query("UPDATE user_vocab_progress SET next_review = next_review + progress * progress, progress = progress + 1\
                                    WHERE l_code = $1 AND u_id = $2 AND v_id = $3", [lang, u_id, v_id])
        }
        else {
            await this.pool.query("UPDATE user_vocab_progress SET next_review = current_date, progress = 1\
                                    WHERE l_code = $1 AND u_id = $2 AND v_id = $3", [lang, u_id, v_id])
        }
    }
}