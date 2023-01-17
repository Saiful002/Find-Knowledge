import React, { useState } from 'react';
import Card from '../Card/Card';



const Search = () => {
const [value,setValue]=useState();
const [books,setBooks]=useState();



   const getInputValue=(e)=>{
setValue(e.target.value);

    }

    // AIzaSyAjn5antfyutAbFQGoOfDjWETTY20_7WxM
  
    
        const fetchData=()=>{
            const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyAjn5antfyutAbFQGoOfDjWETTY20_7WxM`

            // fetch the url
          
            fetch(url)
              .then(res => res.json())
              .then(data => setBooks(data.items))
            
            
        }


    return (
        <div> 
        <div className='mx-auto row'>
            <h1 className='text-white fw-bold mt-5 bg-white text-center bg-opacity-25 p-5 mx-auto rounded-5 col-md-6 col-sm-6 col-lg-6 col-xl-3'>F<span className='text-danger'>!</span>nd Knowledge</h1>
        </div>
            <div className="input-group mt-5 pt-5 mx-auto bg-white bg-opacity-25 p-5 rounded shadow-lg row">
                <input onChange={getInputValue}type="text" id="search-field"
                    className="form-control bg-dark bg-opacity-50 text-white border border-white rounded border-2 shadow-lg col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6"
                    placeholder="search your book here" aria-label="Recipient's username"
                    aria-describedby="button-addon2"/>
                <button
                onClick={fetchData}
                    className="btn btn-success ms-2 border border-success rounded border-2 col-md-3 col-sm-3 col-lg-3 col-xl-3 col-xxl-2" type="button"
                    id="button-addon2">Search</button>
            </div>

            <div>
               { <Card books={books}></Card>}
            </div>
        </div>
    );
};

export default Search;