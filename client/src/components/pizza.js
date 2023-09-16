import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
export default function Pizza({pizza}) {
    const [ quantity, setquantity]=useState(1)
    const [ varient, setvarient]=useState('small')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div style={{margin:'80px'}} className='shadow p-3 mb-5 bg-white rounde'>
      <div onClick={handleShow}>
      <h1>{pizza.name}</h1>
        <img src={pizza.image} className='img-fluid' style={{height:"200px", width:"auto"}} />

      </div>
        <div className='flex-container'>
            <div className='w-100 m-1'>
                <p>Base</p>
                <select className='form-control'>
                    {pizza.base.map(base=>{
                        return <option value={base}>{base}</option>
                    })}

                </select>
            </div>


            <div className='w-100 m-1'>
                <p>Sauces</p>
                <select className='form-control'>
                    {pizza.sauces.map(sauces=>{
                        return <option value={sauces}>{sauces}</option>
                    })}
                </select>
            </div>

            
            </div>
        <div className='flex-container'>
            <div className='w-100 m-1'>
                <p>Varients</p>
                <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                {pizza.varients.map(varient=>{
                    return <option value={varient}>{varient}</option>
                    
                })}
                </select>
            </div>


            <div className='w-100 m-1'>
                <p>Quantity</p>
                <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                    {[...Array(10).keys()].map((x,i)=>{
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>

            
            </div>
            <div class="flex-container">
                <div className='m-1 w-100'>
                    
                <h1 className='mt-1'>Price: ₹{pizza.prices[varient]*quantity}</h1>
                </div>

                <div className='m-1 w-100'>
                    <button className='btn'>Add to Cart</button>
                </div>

            </div>


            <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <center>
        <img src={pizza.image} className='img-fluid mb-3' style={{height:"300px", width:"auto"}} /></center>
        <p>{pizza.description}</p>

        </Modal.Body>
        
        <Modal.Footer>
          <button className='btn' onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
