const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/user", async (req, res) => {
    console.log("Got request");
    res.json({ displayname: "Lindy C", login: "lindy221" })
});

app.listen(3000, () => {
    console.log("Working on port 3000");
});
