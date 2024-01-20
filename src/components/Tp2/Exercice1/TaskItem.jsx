import React, { useState } from 'react'

export default function TaskItem({task}) {
  const [completed,setComleted]=useState(task.completed)
  const change=()=>setComleted(!completed)
  return (
    <li id={task.id} className='list-group-item bg-warning my-2 rounded-2 py-2 '>
      <input type='checkbox' className='form-check-input mx-2' onChange={change} checked={completed} ></input><span style={{textDecoration: completed ?'line-through' : 'none' }} >{task.text}</span>
    </li>
  )
}
