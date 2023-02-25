import React from 'react'
import './About.css';

function Home() {
  return (
    <>
        <div className="whole flex flex-col ">
            <div className="container flex flex-col" >
                <div className="container1">
                    <h1>Weather app</h1>
                    <input type="text" placeholder="location..." id="input"/>
                    <button id="btn">Get</button>
                </div>
                <div className="container2 flex flex-col" >
                    <img src="cloud.png" alt="weather"/>
                    <div><span id="temp">25</span><span id="temp-degree">&#x2103;</span>
                    </div>
                    <div id="weather-update">cloudy</div>
                    <div id="location">Hyderabad</div>
                    
                </div>
            </div>
        </div>
   
    </>
  )
}

export default Home