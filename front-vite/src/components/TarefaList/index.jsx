import "./style.css"

export function TarefaList({ tarefas }) {
    return (
        <ul className="tarefa-list">
            {tarefas.map((tarefa) => (
                <li key={tarefa.id} className={`tarefa-item ${tarefa.status ? 'concluido' : ``}`}>
                    <div className="tarefa-header">
                        <h3>{tarefa.titulo}</h3>
                        <span className="tarefa-status">
                            {tarefa.status ? "concluida 😎" : "Pendente 😖"}
                        </span>
                    </div>

                    <p className="tarefa-descricao">{tarefa.descricao}</p>
                    <p className="tarefa-data">{tarefa.data_prazo}</p>

                    <div className="tarefa-actions">
                        <button className="btn-concluir">Concluir</button>
                        <button className="btn-deletar">Deletar</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

