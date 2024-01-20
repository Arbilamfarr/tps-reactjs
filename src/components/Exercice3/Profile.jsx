import React from 'react'
import Card from './Card'

export default function Profile() {
  return (
    <div>
    <Card>
        
    <div className="card w-25">
        <div className="card-content">
            <h1 className='card-title'> Photo</h1>
            <img
                src="https://i.imgur.com/OKS67lhm.jpg"
                alt="Aklilu Lemma"
                className="card-img"
                />
        </div>
    </div>
        <div className="card w-25 mx-2">
            <div className="card-content">
                <h1 className='card-title'> About</h1>
                <p className='card-text'>Aklilu Lemma was a distinguished Ethiopian scientist 
                                       who discovered a natural treatment to schistosomiasis.
                </p>
            </div>
        </div>
    </Card>
</div>

  )
}
