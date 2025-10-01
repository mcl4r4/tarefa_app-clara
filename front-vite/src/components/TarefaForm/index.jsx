import "./style.css"

export function TarefaForm(){
    return(
        <form className="form-tarefa">
            <h3>Cadastro de Atividade</h3>
            <label htmlFor="titulo">Titulo da Tarefa</label>
            <input 
            type="text" 
            id="titulo"
            name="titulo"
            placeholder="EX..: Estudar Javascript"
            />

            <label htmlFor="descricao">Descrição</label>
            <textarea 
            name="descricao" 
            id="descricao"
            placeholder="O que é preciso para realizar a tarefa"
            ></textarea>

            <label htmlFor="data_prazo">Defina uma data Limit</label>
            <input 
            type="date"
            id="data_prazo" 
            name="data_prazo"
            />

            <input type="submit" value="Cadastrar" />
        </form>
    )
}