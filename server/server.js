require('dotenv').config()
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

const OpenAI = require("openai");
const openai = new OpenAI();

const jwt = require("jsonwebtoken");
const { expressjwt: ejwt } = require("express-jwt");
const fs = require("fs");

const dbrepo = require("./db");
var repo;
const sentgen = require("./sentgen");
var sgen;

const expirytm = 60 * 60 * 24 * 30

const app = express();

const verifyAuthenticated = ejwt({ secret: process.env.RSA_PUBLIC_KEY, algorithms: ["RS256"] });

app.use(cors({
    origin: 'http://localhost:4200',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('1QVIQ7F7tJNa2fGwORfvl6bf6dfYoj63'));

app.use((req, res, next) => {
    repo = new dbrepo.Repository();
    sgen = new sentgen.Generator(repo);
    next();
});

app.use("/", verifyAuthenticated.unless({
    path: ['/', '/auth/signin', '/auth/signup',
        '/topics', '/topics/lexical/:lang/:id', '/aitest']
}));

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});

app.get("/user", async (req, res) => {
    console.log("Got request");
    let id = req.auth.id;
    let usr = await repo.getAccountForUsr(id);
    res.json(usr)
});

app.post("/auth/signin", async (req, res) => {
    console.log("login attempt");
    console.log(req.body.login, req.body.password);
    let login = req.body.login;
    let pwd = req.body.password;
    let { id, pwdHsh } = await repo.getPasswordForUsr(login);
    if (pwdHsh == null) {
        return res.status(403).send({
            success: false,
            message: 'Incorrect login'
        });
    } else if (await bcrypt.compare(pwd, pwdHsh)) {
        const jwtBearer = jwt.sign({ id: id }, process.env.RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: expirytm
        })
        res.json({ idToken: jwtBearer, expiresIn: expirytm });
    } else {
        return res.status(403).send({
            success: false,
            message: 'Incorrect password'
        });
    }
});

app.post("/auth/signup", async (req, res) => {
    console.log("login attempt");
    let sdata = req.body.sdata;
    console.log(sdata);
    if (await repo.loginExists(sdata.login)) {
        return res.status(403).send({
            success: false,
            message: 'Login already exists'
        });
    } else if (await repo.emailExists(sdata.email)) {
        return res.status(403).send({
            success: false,
            message: 'Email already exists'
        });
    } else {
        let hash = await bcrypt.hash(sdata.password, 12);
        sdata.password = hash;
        await repo.addUsr(sdata);
        const jwtBearer = jwt.sign({ id: sdata.id }, process.env.RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: expirytm
        })
        res.json({ idToken: jwtBearer, expiresIn: expirytm });
    }
});

app.get("/random", async (req, res) => {
    res.json(await sgen.getNRandomSentences(req.query.count ? req.query.count : 1, 'tr', 'en', req.auth.id, req.query.noun, req.query.verb, req.query.adjective, req.query.adverb, req.query.numeral))
});

app.get("/topics", async (req, res) => {
    let tops = await repo.getAllTopics();
    res.json(tops)
});

app.get("/topics/lexical/:lang/:id", async (req, res) => {
    let tops = await repo.getWordsFromTopic(req.params.lang, req.params.id, req.auth.id)
    res.json(tops)
});

app.post("/reviews/add", async (req, res) => {
    let wlist = req.body.wlist
    let lang = req.body.lang
    for (let i = 0; i < wlist.length; i++) {
        await repo.addWordToReviews(lang, req.auth.id, wlist[i])
    }
    res.json({ status: 'ok' })
})

app.get("/reviews/:lang", async (req, res) => {
    let data = await repo.getReviews(req.params.lang, req.auth.id)
    res.json(data)
})

app.get("/reviews/:lang/count", async (req, res) => {
    let cnt = await repo.getReviewsCount(req.params.lang, req.auth.id)
    res.json(cnt)
})

app.post("/reviews/update", async (req, res) => {
    let v_id = req.body.v_id
    let lang = req.body.lang
    let corr = req.body.corr
    await repo.updateWordReviews(lang, req.auth.id, v_id, corr)
    res.json({ status: 'ok' })
})

app.get("/aitest", async (req, res) => {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "user",
                "content": "What is the best selling album of Metallica?"
            }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    res.json(response.choices)
})

app.listen(3000, () => {
    console.log("Working on port 3000");
});
