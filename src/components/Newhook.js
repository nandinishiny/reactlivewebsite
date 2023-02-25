import React,{ useState } from 'react';


export default function Newhook() {
    const [myName, setMyName] = useState('NandiniDivity');
    const changeName = ()=>{
        setMyName('the shine');
    }
  return (
    <>
        <h1>{ myName }</h1>
        <button className="btn btn-primary" onClick={changeName}>clickme</button>
    </>
  )
}
