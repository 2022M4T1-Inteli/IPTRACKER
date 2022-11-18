const express = require("express");
require("express-async-errors");
require("dotenv").config();
var bodyParser = require("body-parser");
//const mongoose = require("mongoose");
const cors = require("cors");
const {publish} = require("./mqtt")

const app = express();
app.use(cors());

app.use(express.json()); //Irá suportar JSON
app.use(
  bodyParser.urlencoded({
    // Irá suportar urlenconded
    extended: true,
  })
);

// mongoose.connect(, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })

const PORT = process.env.PORT || 3001;

app.get("/ligar", async (req, res) => {
    try {
        publish("BCIBotao1", "1");
        res.status(200).send("Informação enviada")
    } catch (err) {
        res.status(500).send(`Informação não enviada, pelo erro: ${err}`)
    }
});

app.use("/desligar", async (req, res) => {
    try {
        publish("BCIBotao1", "0")
        res.status(200).send("Informação enviada")
    } catch (err) {
        res.status(500).send(`Informação não enviada, pelo erro: ${err}`)
    }
});

app.post("/teste", async (req, res) => {
    console.log(req.body)
    res.status(200).send("Deu Certo");
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
