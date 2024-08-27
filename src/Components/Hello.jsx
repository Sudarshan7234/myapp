import React, { useState } from 'react'
import imgoff from "../Assets/bulb_off.jpg"
import imgon from "../Assets/bulb_on.jpg"
export default function () {
  const [bulbImg,setBulbImg]=useState(imgoff);
  function bulbOn(){
    setBulbImg(imgon)
  }
  function bulbOff(){
    setBulbImg(imgoff)
  }
  
  return (
    <div>
      <h1>Bulb Activity</h1>
      <button onClick={bulbOn}>On</button>
      <img src={bulbImg}></img>
      <button onClick={bulbOff}>Off</button>
    
    </div>
  )
}
