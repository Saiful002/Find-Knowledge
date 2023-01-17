import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Card = ({books}) => {
const [show,setShow]=useState(false);
const [bookItem,setItem]=useState();



    return (
        <>
        <div className="row gy-4 cards mt-5">

          {/* Make Single Card */}
        {
            books && books.map((book)=>{
                return(

            <div className="col-12 col-md-6 col-xl-4" >
    <div className="card h-100 p-3 bg-black text-white border border-2 border-white">
      <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} style={{height:"500px"}} className="card-img-top img-fluid" alt="..."/>
      <div className="card-body">
        <div className='text-left'>
        <h3 className="card-title">{book.volumeInfo.title}</h3>
        <p className="card-title text-warning fw-bold">{book.volumeInfo.authors}</p>
        <p className="card-title"><span className='fw-bold'>Publisher: </span>{book.volumeInfo.publisher}</p>
        <p className="card-title fw-bold">Publish Year:<span className=" text-success fs-5">{book.volumeInfo.publishedDate}</span></p>
        </div>
        <div >
        <h2 className='text-end text-danger'>{book.volumeInfo.pageCount} Tk</h2>
        </div>
        
      </div>

                  {/* Modal Trigger */}

      <button onClick={()=>{setShow(true);setItem(book)}} type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Confirm Order
</button>

      <div>
    </div>
    </div>
                {/* Pass Data */}

    <Modal show={show} book={bookItem}></Modal>
  </div>
  
        
                )
            })
        }
        </div>
        
        </>
    );
};

export default Card;