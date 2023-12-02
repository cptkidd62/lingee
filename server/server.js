const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

const jwt = require("jsonwebtoken");
const { expressjwt: ejwt } = require("express-jwt");
const fs = require("fs");

const dbrepo = require("./db");
var repo;

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
    next();
});

app.use("/", verifyAuthenticated.unless({ path: ['/', '/auth/signin'] }));

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
    let login = req.auth.login;
    let usr = await repo.getAccountForUsr(login);
    res.json(usr)
});

app.post("/auth/signin", async (req, res) => {
    console.log("login attempt");
    console.log(req.body.login, req.body.password);
    let login = req.body.login;
    let pwd = req.body.password;
    let pwdHsh = await repo.getPasswordForUsr(login);
    if (pwdHsh == null) {
        return res.status(403).send({
            success: false,
            message: 'Incorrect login'
        });
    } else if (pwd == pwdHsh) {
        const jwtBearer = jwt.sign({ login: req.body.login }, RSA_PRIVATE_KEY, {
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

app.listen(3000, () => {
    console.log("Working on port 3000");
});
