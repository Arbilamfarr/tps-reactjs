import React from 'react'
import TaskList from './TaskList'
import TaskListImage from './TaskListImage'

export default function Appel() {
    const Tasks=[
        {id:1,text:"faire des cours",completed:false },
        {id:2,text:"Apprendre react",completed:true },
        {id:3,text:"faire des exercice",completed:false }
      ]

      const photos=[
        {id:1,src:'https://picsum.photos/100',completed:false },
        {id:2,src:'https://picsum.photos/100',completed:true },
        {id:3,src:'https://picsum.photos/100',completed:false }
      ]
  return (
    <div>
    <TaskList tasks={Tasks}></TaskList>
    <TaskListImage photos={photos}></TaskListImage>
    </div>
  )
}
