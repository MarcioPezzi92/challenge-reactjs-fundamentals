import './App.css'
import { Header } from './components/Header/Header'
import { TodoForm } from './components/Todo-form/TodoForm'

function App() {
  return (

    <div>
      <Header />
      <TodoForm />
    </div>
    
    // <div className='w-full h-screen text-4xl text-blue-700 flex items-center justify-center'>
    //   hello world, tailwind css
    // </div>
  )
}

export default App
