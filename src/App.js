import React, { useEffect, useState } from "react";
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
  
  
  
  return (
    <div>
      <h1>Radar Altimeter</h1>
      <div id="grid">
        <img src={scale} className="overlap"  />
        <img src={cover} className="overlap" />
        <img src={needle} className="overlap" style={{transform:`rotate(${valueToDegree(altitude)}deg)`}} />
        <img src={bugImg} className="overlap" style={{transform:`rotate(${valueToDegree(bug)}deg)`}}  />
        <img src={flagImg} className="overlap" hidden={power}/>
        <div className="overlap power" hidden={!power}> </div>
      </div>
      <div>
        <label htmlFor="altitude"> Altitude: </label>
        <input type="range" id="altitude" min="0" max="1500" disabled={!power} onChange={(e)=>{
          setAltitude(e.target.value)
        }} />
        <span> {altitude}</span>
      </div>
      <div>
        <label htmlFor="bug"> Bug:</label>
        <input type="range" id="bug" min="0" max="1500" onChange={(e)=>{
          setBug(e.target.value)}}/>
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
