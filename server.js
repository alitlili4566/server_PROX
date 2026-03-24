const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/login", async (req, res) => {
    try {
        const response = await fetch("https://aserver.infinityfreeapp.com/game_server/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "Mozilla/5.0"
            },
            body: new URLSearchParams(req.body)
        });

        const text = await response.text();
        res.send(text);

    } catch (err) {
        res.status(500).send("Proxy Error: " + err.message);
    }
});

app.listen(3000, () => {
    console.log("Proxy running on port 3000");
});