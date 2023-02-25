
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

export default function Textform(props) {
    const[text,setText] = useState('');
    const handleText =(event) =>{
        setText(event.target.value);
    }
    const handleClicker = () =>{
        let newText =text.toUpperCase();
        setText(newText);
    }
    const handleClickerTwo = () =>{
        let newText =text.toLowerCase();
        setText(newText);
    }
    const clearText =() =>{
        setText("");
    }
    const copyHandler = () =>{
        const selectedText = window.getSelection().toString();
        navigator.clipboard.writeText(selectedText);
    }
    const removeSpaceHandler = () =>{
        let newText =text.replace(/\s+/g, " ").trim();
        setText(newText);
    }
  return (
    <>
        <div className ="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1"style ={{color: props.mode==='light'?'#151414':'white',
    backgroundColor:props.mode==='light'?'white':'black'}} rows="3"value={text} onChange={handleText}> </textarea>

            <button className="btn btn-primary mx-1" onClick={handleClicker}>convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClickerTwo}>convert to lowercase </button>
            <button className="btn btn-primary mx-1" onClick={clearText}>cleartext</button>
            <button className="btn btn-primary mx-1" onClick={copyHandler}>copy</button>
            <button className="btn btn-primary mx-1" onClick={removeSpaceHandler}>remove spaces</button>
            <div className={`container`}style={{color:props.mode==='light'?'black':'white'}}>
                <h2>your text summary </h2>
                <p>the no of words {text.split(" ").length}</p>
                <p>the no of characters {text.length}</p>
            </div>
        </div>
        <footer><Link className='btn btn-primary my-2'to='/'>return to homepage</Link></footer>
     
            

    </>
    );
}
