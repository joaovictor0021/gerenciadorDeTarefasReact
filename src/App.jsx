import { useEffect, useState } from 'react'
import './App.css'
import AddTasks from './components/AddTasks'
import Title from './components/Title'
import {v4} from 'uuid'
import Task from './components/Task'

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('task')) || []
  );

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks))
  })

  function onCreateNewTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
  }

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task;
    });
    setTasks(newTask)
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter(task => task.id !== taskId)

    setTasks(newTask)
  }


  return (
    <>
      <div className='w-screen min-h-screen bg-green-500 flex justify-center p-6'>
        <div className='w-[500px] space-y-4'>
          <Title>Gerenciador de Tarefas</Title>
          <AddTasks onCreateNewTask={onCreateNewTask}/>
          <Task tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
        </div>
      </div>
    </>
  )
}

export default App
