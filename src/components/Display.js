import React from 'react';
import { Link } from 'react-router-dom';


function Display() {
    let myStyle ={
        backgroundColor:'linear-gradient(to right,rgb(55, 194, 228),rgb(10, 47, 228))',
        color:'whitesmoke'
    }
  return (
    <>
    <h1 style={myStyle}>hi this is nandini shiny</h1>
    <footer><Link className='btn btn-primary my-2'to='/'>return to homepage</Link></footer>
     

    </>
  )
}

export default Display