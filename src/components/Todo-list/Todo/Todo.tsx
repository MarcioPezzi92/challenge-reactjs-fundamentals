import { Circle, CheckCircle ,Trash } from 'phosphor-react'
import { ITask } from '../TodoList'

interface ITodo {
  task: ITask,
  onDeleteTask: (taskId: string) => void,
  checkTaskDone: (taskId: string) => void,
}

export function Todo(todo: ITodo) {

  function handleOnDeleteTask() {
    todo.onDeleteTask(todo.task.id);
  }

  function handleCheckIfItsDone() {
    todo.checkTaskDone(todo.task.id);
  }

  return(
    <li key={todo.task.id} className='p-5 flex justify-between bg-gray-700 border border-gray-600 rounded-lg'>
        <div className='flex gap-5'>
        {
          todo.task.isComplete 
          ? ( 
              <button onClick={handleCheckIfItsDone} className='text-violet-500 hover:text-violet-400'><CheckCircle size={24} weight='fill' /></button>
            ) 
          : ( 
                <button onClick={handleCheckIfItsDone} className='text-blue-400 hover:text-blue-600'><Circle size={24}/></button>
            )
        }
        <p className={todo.task.isComplete ? 'text-sm line-through' : 'text-sm'}>{todo.task.title}</p>
        </div>
      <button 
        className='text-gray-300 hover:text-red-500 hover:bg-zinc-700 hover:rounded-md'><Trash size={24}
        onClick={handleOnDeleteTask}
      />
      </button>
    </li>
  )
}