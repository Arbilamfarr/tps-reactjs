import React from 'react'
import TaskItemImage from './TaskItemImage'


export default function TaskListImage({photos}) {
  return (
    <div>
    <ul className='w-50 container-fluid align-items-center my-5'>
      {photos.map((photo)=>
    <TaskItemImage photo={photo}></TaskItemImage> 

      )}
      </ul>
    </div>
  )
}
