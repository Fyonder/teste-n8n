const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const EVOLUTION_URL = process.env.EVOLUTION_URL || "http://localhost:8080";
const N8N_URL = process.env.N8N_URL || "http://localhost:5678";

app.get("/", (req, res) => {
  res.json({ message: "Servidor ativo e integrado!" });
});

app.post("/send-whatsapp", async (req, res) => {
  const { phone, message } = req.body;
  try {
    await axios.post(`${EVOLUTION_URL}/message/sendText`, {
      number: phone,
      text: message,
    });
    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erro ao enviar mensagem" });
  }
});

app.post("/webhook/evolution", async (req, res) => {
  console.log("Evento recebido do Evolution:", req.body);
  await axios.post(`${N8N_URL}/webhook/evolution-event`, req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server online na porta ${PORT}`));
