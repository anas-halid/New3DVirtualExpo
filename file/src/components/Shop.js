import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop() {
  return (
    <div>  
          <h1>Welcome to our Virtual Product Exhibition Booth!</h1>
    <h3 id="centeralign">Here you can learn about our latest products and services.</h3>
    <ul>
      <li id ="menu"><a href="">View Product Video</a></li>
      <li id ="menu"><Link to='/items'>view products</Link></li>
      <li id ="menu"><a href="">"Live Demo"</a></li>
      <li id ="menu"><a href="">"Live Chat"</a></li>


    </ul>
    </div>
  )
}

