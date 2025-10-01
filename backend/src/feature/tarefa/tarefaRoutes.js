import { Router } from "express";
import { cadastrarTarefa } from "./tarefaController.js";

const router = Router()

router.post("/",cadastrarTarefa )

export default router;
