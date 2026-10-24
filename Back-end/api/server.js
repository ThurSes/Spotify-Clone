// POST, GET, PUT, DELETE

import express from "express";
import cors from "cors"
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

app.use(cors())

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar como os endpoints '/artists' e '/songs'");
});
app.get("/artists", async(request, response) => {
  try {
    response.json(await db.collection("artists").find({}).toArray());
  } catch (error) {
    console.error("Erro ao consultar artistas:", error);
    response.status(500).json({ error: "Não foi possível carregar os artistas." });
  }
});
app.get("/songs", async(request, response) => {
  try {
    response.json(await db.collection("songs").find({}).toArray());
  } catch (error) {
    console.error("Erro ao consultar músicas:", error);
    response.status(500).json({ error: "Não foi possível carregar as músicas." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
