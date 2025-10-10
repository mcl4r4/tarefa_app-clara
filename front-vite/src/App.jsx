import { useState } from 'react'
import './App.css'
import { TarefaForm } from './components/TarefaForm'
import { TarefaList } from './components/TarefaList'
import { Header } from './components/ui/Header'
import { useEffect } from 'react'

function App() {

  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTarefas = async () => {
      try {
        const response = await fetch("http://localhost:3333/api/tarefas")
        if (!response.ok) {
          throw new Error("Erro ao buscar tarefa")
        }

        const data = await response.json()
        
        console.log(data.tarefas)
        setTarefas(data.tarefas)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchTarefas()

  }, [])

  const adicionarTarefa = (novaTarefa) => {
    setTarefas((prev) => [...prev, novaTarefa])
  }

  if (loading) {
    return <p>Carregando Tarefas</p>
  }

  if (error) {
    return <p>Erro:</p>
  }
  return (
    <div className='container'>
      <Header />

      <main>
        <TarefaForm onNovaTarefa={adicionarTarefa} />
        <TarefaList tarefas={tarefas} />
      </main>
    </div>
  )
}

export default App;
