const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/user", async (req, res) => {
    console.log("Got request");
    res.json({ displayname: "Lindy C", login: "lindy221" })
});

app.post("/auth/signin", (req, res) => {
    console.log("login attempt");
    console.log(req.body.login, req.body.password);
    res.status(200).send(msg = "success");
});

app.listen(3000, () => {
    console.log("Working on port 3000");
});
