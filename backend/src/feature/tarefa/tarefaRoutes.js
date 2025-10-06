import { Router } from "express";
import { cadastrarTarefa, listarTarefas } from "./tarefaController.js";

const router = Router()

router.post("/",cadastrarTarefa )
router.get("/",listarTarefas )

export default router;
