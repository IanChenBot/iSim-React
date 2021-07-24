import React, { useEffect, useState, useRef} from "react";
import "./App.css";

import scale from "./assets/radaltback.png";
import cover from "./assets/radaltcover.png";
import needle from "./assets/radaltneedle.png";
import bugImg from "./assets/bug.png";
import flagImg from "./assets/radaltflag.png";

function App() {
  const [power, setPower] = useState(false);
  const [bug, setBug] = useState(0);
  const [altitude, setAltitude] = useState(0);
  

  let valueToDegree = (value)=>{
    if(value <= 500){
      return (180/500) * value
    }else{
      return 180+(90/1000)*(value-500)
    }
  }


  let buttonStyle;
  if(bug>=altitude && power==true){
    buttonStyle={ 
      background: 'radial-gradient(#ffffff,#ff0000)',
    }
  }else{
    buttonStyle ={
      background: 'red'
    }
  }

  let currentAltitude;
  if(power){
    currentAltitude=altitude;
  }

  
  
  
  
  
  return (
    <div>
      <h1>Radar Altimeter</h1>
      <div id="grid">
        <img src={scale} className="overlap"  />
        <img src={cover} className="overlap" />
        <img src={needle} className="overlap" style={{transform:`rotate(${valueToDegree(currentAltitude)}deg)`}} />
        <img src={bugImg} className="overlap" style={{transform:`rotate(${valueToDegree(bug)}deg)`}}  />
        <img src={flagImg} className="overlap" hidden={power}/>
        <div className="overlap power" hidden={!power} style={buttonStyle}> </div>
      </div>
      <div>
        <label htmlFor="altitude"> Altitude: </label>
        <input type="range" id="altitude" min="0" max="1500" onChange={(e)=>{
            setAltitude(parseInt(e.target.value))
          
        }} />
        <span> {altitude}</span>
      </div>
      <div>
        <label htmlFor="bug"> Bug:</label>
        <input type="range" id="bug" min="0" max="1500" onChange={(e)=>{
          setBug(parseInt(e.target.value))}}/>
        <span> {bug}</span>
      </div>
      <div>
        <label htmlFor="power"> Has power:</label>
        <input type="checkbox" onChange={()=>{setPower(!power)}} checked={power} id="power" />
      </div>
    </div>
  );
}

export default App;
