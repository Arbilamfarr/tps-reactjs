import React from 'react'

export default function TaskItem({task}) {
  return (
    <li className='list-group-item bg-info my-2 rounded-2 py-2'>
      <input type='checkbox' checked={task.completed} ></input><span style={{textDecoration: task.completed ?'line-through' : 'none' }} >{task.text}</span>
    </li>
  )
}
