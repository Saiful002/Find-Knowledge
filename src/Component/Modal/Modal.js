import axios from 'axios';
import React, { useState } from 'react';

const Modal = ({show,book}) => {
  const [name,setName]=useState('');
  const [address,setAddress]=useState('');
  const [email,setEmail]=useState('');

      
  
  // Pass data to Spread Sheet

  
const handleSubmit=(e)=>{

  e.preventDefault()
  
  
  const data={
    Name:name,
    Address:address,
    Email:email,
    BookID:book.id
  }
  axios.post('https://sheet.best/api/sheets/f49b010c-b23e-4ff3-b1fc-0dfb7eae22ec',data)
  .then((response)=>{
    setName('')
    setAddress('')
    setEmail('')

  })

  alert('Submitted Successfully')
}


   if(!show){
    return null;
   }
   
    return (
        <div>


      {/* Confirm Modal  */}
 
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog  modal-dialog-scrollable">
    <div className="modal-content bg-black text-white border border-2 border-white">
        <div className="modal-header text-white">
        <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} style={{height:"40vh"}} className="card-img-top img-fluid" alt="..."/>
          
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="text-white">
        <h1 className="modal-title fs-2 fw-bold" id="exampleModalLabel">{book.volumeInfo.title}</h1>
          <h3 className="modal-title" id="exampleModalLabel"><span className='fs-5'>Catagory:</span>{book.volumeInfo.categories}</h3>
          <h3 className="modal-title" id="exampleModalLabel"><span className='fs-5'>Language:</span>{book.volumeInfo.language}</h3>
          
        </div>

        {/* Get all input value */}


        <div className="mt-5">
              <form className="form-group row" onSubmit={handleSubmit}>
                    <div className="col-12">
                      <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="form-control" placeholder="Full Name" aria-label="Full Name"/>
                    </div>
                    <div className="col-12">
                      <input onChange={(e)=>setAddress(e.target.value)} value={address} type="text" className="form-control" placeholder="Address" aria-label="Address"/>
                    </div>
                    <div className="col-12">
                      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="form-control" placeholder="E-mail" aria-label="email"/>
                    </div>
                    <button type="submit" className="btn btn-primary " style={{width:"100%"}}>Submit</button>
              </form>
          
          
          
          
        </div>
      
      
                  
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;