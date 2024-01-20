import React, { useState } from 'react'
import ComTest from './ComTest'

export default function Test() {
    const [task,setTask]=useState({
      title:"Header1",
      img:{
          src:"https://picsum.photos/100",
          alt:"mon photo"
      }
  })
  return (
    <div>
      <ComTest task={task}></ComTest>
    </div>
  )
}
