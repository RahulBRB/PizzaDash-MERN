import React, {useState} from 'react'

export default function Pizza({pizza}) {
    const [ quantity, setquantity]=useState(1)
    const [ varient, setvarient]=useState('small')

  return (
    <div>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className='img-fluid' style={{height:"200px", width:"auto"}} />

        <div className='flex-container'>
            <div className='w-100'>
                <p>Base</p>
            </div>


            <div className='w-100'>
                <p>Sauces</p>
            </div>

            
            </div>
        <div className='flex-container'>
            <div className='w-100'>
                <p>Varients</p>
                <select value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                {pizza.varients.map(varient=>{
                    return <option value={varient}>{varient}</option>
                    
                })}
                </select>
            </div>


            <div className='w-100'>
                <p>Quantity</p>
                <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                    {[...Array(10).keys()].map((x,i)=>{
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>

            
            </div>
            <div class="flex-container">
                <div></div>
                <div></div>

            </div>
    </div>
  )
}
