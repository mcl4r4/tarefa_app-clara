import './App.css'
import { TarefaForm } from './components/TarefaForm'
import { Header } from './components/ui/Header'

function App() {


  return (
    <div className='container'>
      <Header />

      <main>
        <TarefaForm />
        <div className='container'>Lista das tarefas</div>
      </main>
    </div>
  )
}

export default App
