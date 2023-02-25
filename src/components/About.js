import React,{useState} from 'react';
import { Link } from 'react-router-dom';


export default function About() {

  const [noChange,afterChange]=useState('enable darkmode');
  const [mode,setDarkmode]=useState({
    color :'black',
    backgroundColor:'white'
  });

  
  const handleClicker = ()=>{
    if(noChange==='enable darkmode'){
      afterChange('enable lightmode');
      setDarkmode({
        color :'white',
        backgroundColor:'black'
        
      });
      document.body.style.backgroundColor = 'black'
      
    }
    else{
      afterChange('enable darkmode');
      setDarkmode({
        color :'black',
        backgroundColor:'white'
      });
      document.body.style.backgroundColor = 'white'
      
    }
    
    


  }
  
  

  return (
    <>
        <h2 style={mode} >Enabling darkmode</h2>
        <div style={mode} className="accordion" id="accordionExample" >
          <div className="accordion-item" style={mode}>
            <h2 className="accordion-header" id="headingOne">
              <button style={mode}className="accordion-button" type="button" data-bs-toggle="collapse"          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item"style={mode}>
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={mode}>
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item"style={mode}>
            <h2 className="accordion-header" id="headingThree" >
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mode}>
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary my-2" onClick={handleClicker}>{noChange}</button>
        <footer><Link className='btn btn-primary my-2'to='/'>return to homepage</Link></footer>
     
    </>
  )
}
