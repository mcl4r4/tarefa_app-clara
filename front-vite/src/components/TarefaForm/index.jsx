import "./style.css";
import { useState } from "react";

export function TarefaForm({ onNovaTarefa }) {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataPrazo, setDataPrazo] = useState("");

    // controla as infomarções do formulario

    const handleSubmit = async (e) => {
        e.preventDefault()
        const tarefa = {
            titulo,
            descricao,
            data_prazo: dataPrazo
        }
        console.log(tarefa)
        try {
            const response = await fetch("http://localhost:3333/api/tarefas", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(tarefa)
            })

            const data = await response.json()
            console.log(data)

            if (response.ok) {
                // alert("Tarefa cadastrada")
                onNovaTarefa(data.novaTarefa)

                setTitulo('')
                setDescricao('')
                setDataPrazo('')
            } else {
                alert("Erro, ", data.message)
            }
        } catch (error) {
            console.log("Erro ao enviar dados:", error)
        }
    }

    return (
        <form className="form-tarefa" onSubmit={handleSubmit}>
            <h3>Cadastro de Atividade</h3>
            <label htmlFor="titulo">Titulo da Tarefa</label>
            <input
                type="text"
                id="titulo"
                name="titulo"
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="EX..: Estudar Javascript"
            />

            <label htmlFor="descricao">Descrição</label>
            <textarea
                name="descricao"
                id="descricao"
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="O que é preciso para realizar a tarefa"
            ></textarea>

            <label htmlFor="data_prazo">Defina uma data Limit</label>
            <input
                type="date"
                id="data_prazo"
                name="data_prazo"
                onChange={(e) => setDataPrazo(e.target.value)}
            />

            <input type="submit" value="Cadastrar" />
        </form>
    )
}