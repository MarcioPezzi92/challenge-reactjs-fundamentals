import { PlusCircle } from 'phosphor-react'
import './TodoForm.css'

export function TodoForm() {
return (
  <div className='-m-5 flex justify-center'>
    <form className='flex gap-2'>
      <input className='p-1 bg-gray-600 text-white border border-gray-900 rounded-lg' type="text" placeholder='Adicione uma nova tarefa' />
      <button className='p-1 rounded-lg flex gap-1 items-center bg-blue-800 text-white'>Criar <PlusCircle /></button>
    </form>
  </div>
)
}