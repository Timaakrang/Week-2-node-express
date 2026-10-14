const express = require("express"); const app = express();

require("dotenv").config(); const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });

app.use(express.static("public", { index: false }));

app.get("/", (req, res) => { res.send("My Week 2 API!"); });

app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    res.send(`User ${id} profile`);
});
app.post("/user", (req, res) => { const { name, email } = req.body;

if (!name || !email) { return res.status(400).json({ error: "Name and email are required" }); } res.send(`Hello, ${name}!`); 

});

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });

