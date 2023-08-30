import React from 'react'

const Task = ({task, toggleTask, onToggle}) => {
    function handleToggleTask(){
        toggleTask (task.id)
    }
  return (
    <div className = 'task-component'>
        <input type = 'checkbox' checked = {task.complete} onChange={handleToggleTask} onDoubleClick={onToggle}/>
        ID: {task.id}<br />
        Name: {task.name}<br />
        Description: {task.description}
    </div>
  )
}

export default Task