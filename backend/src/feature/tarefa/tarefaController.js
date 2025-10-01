import { tarefaModel } from "./tarefaModel.js";

export const cadastrarTarefa = async (request, response, next) => {
  const { titulo, descricao, data_prazo } = request.body;

  try {
    if (!titulo) {
      const err = new Error("O campo titulo é obrigatório");
      err.statusCode = 400;
      throw err
    }
    if (!descricao) {
      const err = new Error("O campo descricao é obrigatório");
      err.statusCode = 400;
      throw err
    }
    if (!data_prazo) {
      const err = new Error("O campo data_prazo é obrigatório");
      err.statusCode = 400;
      throw err
    }
    await tarefaModel.create({
      titulo,
      descricao,
      data_prazo
    })

    response.status(201).json({
      success: true,
      statusCode: 201,
      message: "Tarefa cadastrada!"
    })

  } catch (error) {
    next(error)
    console.log(error)
  }
}
