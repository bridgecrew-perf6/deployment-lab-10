const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/css", (req, res) => {
    res.sendFile(path.join(__dirname, '../index.css'))
});

app.get("/js", (req,res) => {
    res.sendFile(path.join(__dirname, "../index.js"))
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We vibin on port ${port}`);
});