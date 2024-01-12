const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { expressjwt: ejwt } = require("express-jwt");
const fs = require("fs");

const dbrepo = require("./db");
var repo;
const sentgen = require("./sentgen");
var sgen;

const RSA_PRIVATE_KEY = fs.readFileSync('./keys/jwtRS256.key');
const RSA_PUBLIC_KEY = fs.readFileSync('./keys/jwtRS256.key.pub');

const app = express();

const verifyAuthenticated = ejwt({ secret: RSA_PUBLIC_KEY, algorithms: ["RS256"] });

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
    sgen = new sentgen.Generator();
    next();
});

app.use("/", verifyAuthenticated.unless({ path: ['/', '/auth/signin', '/auth/signup', '/random', '/random/topics'] }));

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
        const jwtBearer = jwt.sign({ id: id }, RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 1200
        })
        res.json({ idToken: jwtBearer, expiresIn: 1200 });
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
        const jwtBearer = jwt.sign({ id: sdata.id }, RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 1200
        })
        res.json({ idToken: jwtBearer, expiresIn: 1200 });
    }
});

app.get("/random", (req, res) => {
    // res.json({
    //     0: sgen.getFromPattern('tr', sgen.pattern1),
    //     1: sgen.getFromPattern('en', sgen.pattern1),
    //     2: sgen.getFromPattern('tr', sgen.pattern2),
    //     3: sgen.getFromPattern('en', sgen.pattern2),
    //     4: sgen.getFromPattern('tr', sgen.pattern3),
    //     5: sgen.getFromPattern('en', sgen.pattern3),
    //     6: sgen.getFromPattern('tr', sgen.pattern4),
    //     7: sgen.getFromPattern('en', sgen.pattern4),
    //     8: sgen.getFromPattern('tr', sgen.pattern5),
    //     9: sgen.getFromPattern('en', sgen.pattern5),
    //     10: sgen.getRandomSentence('en', 'tr')
    // });
    res.json(sgen.getNRandomSentences(6, 'tr', 'en'))
});

app.get("/random/topics", (req, res) => {
    res.json([{ name: 'To Be', code: 'tobe' },
    { name: 'To Have', code: 'tohave' },
    { name: 'To Do', code: 'dosth' },
    { name: 'Adjectives', code: 'adj' },])
});

app.listen(3000, () => {
    console.log("Working on port 3000");
});
