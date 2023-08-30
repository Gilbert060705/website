import React from 'react'
import { useState, useRef, useEffect } from 'react'
import TaskList from "../components/TaskList"
import '../styles/MyTasks.css'
import Button from '../components/Button'
import { clear } from '@testing-library/user-event/dist/clear'

const LOCAL_STORAGE_KEY = 'todoapp.todos'
function MyTasks() {

  const [tasks,setTasks] = useState([])
  const [description, setDescription] = useState('');

  const tasksRef = useRef()
  useEffect(() =>{
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTasks) setTasks(storedTasks)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(tasks))
  },[tasks])

  function addTasks(){
    let taskName = tasksRef.current.value
    let id = Math.floor(Math.random()*10000)
    if (taskName === '') return alert('Please Add a Task')

    setTasks(prevTodos => {
      return [...tasks,{id:id, name:taskName, description: description, complete : false}]
    })
    tasksRef.current.value = null
    setDescription('')
  }

  function toggleTask(id){
    const newTasks = [...tasks]
    const task = newTasks.find (task => task.id === id)
    task.complete = !task.complete
    setTasks(newTasks)
  }
  
  function removeTasks(){
    const newTasks = tasks.filter(task => !task.complete)
    setTasks(newTasks)
  }

  function removeAllTasks(){
    setTasks([])
  }

  function clearStorage(){
    localStorage.clear()
    alert('Storage has been cleared, refresh the page to see the result')
  }
  return (
    <div className = "container">
      <h1 className = "project-title">Task Tracker</h1>
      {
        tasks.length == 0 ?'' : <h1 className='total-tasks'>{tasks.filter(task => !task.complete).length} left to do</h1>
      }
<input className = 'input-field' ref={tasksRef} placeholder='Add Task...'/>
<textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button bgColor="35CF79" textColor="black" onClick = {addTasks} text='Add Task' bottom = '79px' right='95px'></Button>
      <Button bgColor="1183F5" textColor="black" onClick = {removeTasks} bottom = '109px' right='-95px' text='Remove Task'></Button>
      <Button bgColor="F7440B" textColor="black" onClick = {removeAllTasks} text='Delete All Tasks' bottom = '79px' right='95px'></Button>
      <Button bgColor="F7CA0B" textColor="black" onClick = {clearStorage} text='Clear Storage' bottom = '108px' right='95px'></Button>
      { tasks.length > 0 ? <TaskList tasks = {tasks} toggleTask={toggleTask}/> : 'No tasks to show'}
    </div>
  )
}

export default MyTasks