import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';




export default function ComTest({task}) {
  
  return (
    <div >
                <div className='card w-25 ' >
              <img src={task.img.src} alt="une tache" className='ard-img p-1 rounded-3' style={{height:200}}/>
              <div className='card-body'>
                <h2 className='card-title'>Haider1</h2>
                <p className='card-text fs-5'>Aklilu Lemma was a distinguished Ethiopian scientist 
                                       who discovered a natural treatment to schistosomiasis.</p>
              <button className='btn btn-warning'>ajouter</button>
              </div>
            </div>
    </div>
  )
}
