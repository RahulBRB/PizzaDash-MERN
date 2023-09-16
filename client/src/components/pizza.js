import React from 'react'

export default function Pizza({pizza}) {
  return (
    <div>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className='img-fluid' style={{height:"200px", width:"auto"}} />

        <div className='flex-container'>
            <div className='w-100'>
                <p>Varients</p>
            </div>


            <div className='w-100'>
                <p>Prices</p>
            </div>

            
            </div>'
    </div>
  )
}
