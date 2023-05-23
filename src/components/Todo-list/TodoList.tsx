import { Todo } from "./Todo/Todo";
import { PlusCircle, ClipboardText } from 'phosphor-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id: string;
  title: string;
  isComplete: boolean;
}

let data: ITask[] = []

export function TodoList() {
  
  let task: ITask = {
    id: '',
    title: '',
    isComplete: false
  }

  const [tasks, setTasks] = useState(data)

  const createdTasks = tasks.length;

  const completedTasks: number = tasks.filter(task => task.isComplete).length;

  const [newTask, setNewTask] = useState(task)

  const isNewTaskEmpty = newTask.title.length === 0;

  function handleCreateTask() {
    event?.preventDefault()

    console.log(newTask);

    setTasks([...tasks, newTask])

    setNewTask(task);
  }

  function handleOnChange(e: React.FormEvent<HTMLInputElement>): void {
    setNewTask({
      id: uuidv4(),
      isComplete: false,
      title: e.currentTarget.value
    });
  }

  function handleOnInvalid(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.setCustomValidity('Este campo é obrigatório!');
  }

  function deleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskId;
    })

    setTasks(tasksWithoutDeletedOne);
  }

  function checkTaskDone(taskId: string) {
    const updatedTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          id: task.id,
          isComplete: !task.isComplete,
          title: task.title
        }
      } else {
        return task
      }
    });

    setTasks(updatedTasks)
  }

  return (
    <div>
      <div className='flex justify-center'>
        <form className='w-full flex gap-2' onSubmit={handleCreateTask}>
          <input 
            className='p-4 flex-1 bg-gray-700 border-2 border-gray-900 rounded-lg text-base'
            type="text" 
            placeholder='Adicione uma nova tarefa'
            value={newTask.title}
            required
            onChange={handleOnChange}
            onInvalid={handleOnInvalid}
          />
          <button
            type='submit'
            disabled={isNewTaskEmpty}
            className='p-4 flex gap-1 items-center font-inter rounded-lg bg-blue-700 hover:bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed'
          >
          Criar <PlusCircle size={20} />
          </button>
        </form>
      </div>

      <div className="mt-14">

        <header className="flex justify-between">
          <div className="text-blue-400 text-sm font-bold">
            Tarefas criadas 
            <span className="ml-2 py-1 px-2 bg-gray-700 rounded-lg text-white text-xs">{createdTasks}</span>
          </div>
          <div className="text-blue-400 text-sm font-bold">
            Concluídas 
            <span className="ml-2 py-1 px-2 bg-gray-700 rounded-lg text-white text-xs"> {completedTasks} de {createdTasks}</span>
          </div>
        </header>

        <div>
          {
            createdTasks 
            ? 
              <ul className="mt-5 flex flex-col gap-3">
                { tasks.map(task => {
                  return (
                    <Todo 
                      key={task.id}
                      task={task}
                      onDeleteTask={deleteTask}
                      checkTaskDone={checkTaskDone}
                    />
                  )})}       
              </ul> 
            : 
              <div className='m-6 pt-16 flex flex-col justify-center items-center gap-4 border-t border-gray-600 rounded-lg'>
                <ClipboardText size={56} weight="thin"/>
                <div>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </div>
          }
        </div>

      </div>
    </div>
  )
}