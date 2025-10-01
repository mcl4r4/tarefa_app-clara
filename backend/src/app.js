import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.js";

import { conn } from "./config/sequelize.js";

import { tarefaModel } from "./feature/tarefa/tarefaModel.js";

import tarefaRoutes from "./feature/tarefa/tarefaRoutes.js"

const app = express()

conn.sync()

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))
app.use(express.json())

app.use("/api/tarefas", tarefaRoutes)

//ROTA 404

app.use((request, response) => {
  response.status(404).json({ messagem: "Rota não existe" })
})

//Erro GLOBA
app.use(errorHandler)

export default app;
