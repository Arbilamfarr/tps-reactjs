import React from 'react'
import ComTest from './ComTest'

export default function Test() {
    const task={
        title:"Header1",
        img:{
            src:"https://picsum.photos/90",
            alt:"mon photo"
        }
    }
  return (
    <div>
      <ComTest task={task}></ComTest>
    </div>
  )
}
