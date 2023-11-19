const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('1QVIQ7F7tJNa2fGwORfvl6bf6dfYoj63'));

app.get("/user", async (req, res) => {
    console.log("Got request");
    res.json({ displayname: "Lindy C", login: "lindy221" })
});

app.post("/auth/signin", (req, res) => {
    console.log("login attempt");
    console.log(req.body.login, req.body.password);
    res.cookie("user", { displayname: "Lucy Logan", login: req.body.login },
        { maxAge: 5 * 60 * 1000, signed: true, httpOnly: true, sameSite: "lax" });
    res.status(200).send(msg = "success");
});

app.get("/auth/signout", (req, res) => {
    console.log("signout attempt");
    res.clearCookie("user", { domain: "localhost", path: "/", signed: true, httpOnly: true, sameSite: "lax" }).status(200).send("done");
});

app.listen(3000, () => {
    console.log("Working on port 3000");
});
