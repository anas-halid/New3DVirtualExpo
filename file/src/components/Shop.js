import React from 'react'
import { Link } from 'react-router-dom'
import bg from './booth3.png' ; 


export default function Shop() {
  return (
    <div style={{backgroundColor: '#4E6E83'}}>  

    <div class="fade-in-text">
      <br></br>
    <h1>Welcome to [###] Exhibition Booth!</h1>
    </div>  
    <ul>
      <li id ="menu" style={{ position: 'relative', left: 90, top: 515 }} ><a href="">View Product Video</a></li>
      <li id ="menuright"style={{ position: 'relative', left: -85, top: 440}}><Link to='/items'>view products</Link></li>
      <li id ="menu" style={{ position: 'relative', left: 90, top: 515 }}><a href="">"Live Demo"</a></li>
      <li id ="menuright" style={{ position: 'relative', left: -85, top: 440}}><a href="">"Live Chat"</a></li>
      <img id ="bground" src={bg} />

    </ul>
    <h3 id="centeralign">Here you can learn about our latest products and services.</h3>
    </div>
  )
}

