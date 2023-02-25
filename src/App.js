// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import Textform from './components/Textform';
import Home from './components/Home';
import Display from './components/Display';
// import Alert from './components/Alert';
// import Newhook from './components/Newhook';

function App() {
  const[mode,setMode]= useState('light');
  // const[alert,setAlert]= useState("hello");
  
  // const showAlert=(msg,type)=>{
  //   setAlert({message:msg,
  //   msgtype:type }) 

  // }
  const clickHandler =()=>{
    if (mode ==='light'){
      document.body.style.backgroundColor = 'black';
      setMode('dark')
      // showAlert('darkmode has enabled',"success")
    }
    else{
      document.body.style.backgroundColor = 'white';
      setMode('light')
      // showAlert('lightmode has enabled',"success")
    }

  }
  return(
  <Router>
      <Routes> 
        <Route path="/" element={[ 
        <Navbar key="Navbar" title="textapp" mode={mode} forChange ={clickHandler}/>,
        <Home key='Home'/>
        
        ]} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Display />} />
       
        <Route path="/text" element={<div className="container">
          <Textform heading ="enter your text here"mode={mode} />
          </div>} />
      </Routes>
    

    

    {/* <Route path="/contact" component={Contact} /> */}
  
    {/* <Alert alert ={alert}/> */}

    
    {/* <Newhook/> */}
     
  </Router>
    

  );
    
    
  
} 

export default App;
