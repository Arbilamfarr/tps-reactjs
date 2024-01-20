import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({tasks}) {
  return (
    <div>
    <ul className='w-50 container-fluid align-items-center my-5'>
      {tasks.map((task)=>
    <TaskItem task={task}></TaskItem> 

      )}
      </ul>
    </div>
  )
}
