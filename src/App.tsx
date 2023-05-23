import './App.css'
import { Header } from './components/Header/Header'
import { TodoList } from './components/Todo-list/TodoList'

function App() {

  return (
    <div className='min-h-screen bg-gray-800'>
      <Header />
      <div className='-mt-8 mx-auto w-2/3'>
        <TodoList />
      </div>
    </div>
  )
}

export default App
