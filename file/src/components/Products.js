import React from 'react';
import { Link } from 'react-router-dom'
import vaccum from "./vaccum.png";
import blender from "./blender.png";
import cooker from "./cooker.png";
import juicer from "./juicer.png";
import iron from "./iron.png";
import tv from "./tv.png";
import dishwasher from "./dishwasher.png";
import heater from "./heater.png";
function Products() {
  const myStyle = {
    color: "black",
    fontWeight: "bold",
    padding: "10px",
    fontFamily: "Monaco",
    fontSize: 40,
  };
  const myTitle ={
    color: "red",
    fontSize: 25,
    toppadding: "20px",
    fontFamily: "Sans-Serif",
    fontWeight: "bold",
  }
  const image = {
    float: "Left",
    margin: "10px",
    width: "30%",
    height: "30%",
  }
  const details = {
    fontSize: 15,
    padding: "5px",
    fontFamily: "Times New Roman",
  }
  const button ={
    fontSize: 10,
    toppadding: "1px",
    rightpadding: "10px",
    fontFamily: "Times New Roman",
    float: "Left-Right",
    fontWeight: "bold",
  }
  
  
  
  
   return (
<div class="Product-List">
    <h1 style={myStyle}>Products/Services</h1>

    
      <div class="product">
            <div class="product-image">
                
                        <img src={vaccum} alt="Product image" style={image}/>
                    
                </div>
                <div class="product-details">
                    <p style ={myTitle} class="title">BCS612GB cordless vacuum cleaner</p>
                    <p class="price"><strong>HK$2,988</strong></p>
                    <br></br>
                    <div style={details}class="details">
                   <p> Unlimited Plus cordless vacuum cleaner, no interruption, no gravity, easy dust removal.</p>
                    
                        <p>Made in Germany: Quality assurance thanks to rigorous testing and production standards.
                        Lighter: The new slim DigitalSpin brushless motorcycle weighs only 1.5 kg for quiet operation, more durable and reliable suction performance.
                        Highly efficient electric brush head for cleaning any type of floor or carpet surface.</p>
                    
                        <br></br>
                    </div>
                    
                    
                            <Link to='/payment' target="_blank">
                        <button type="button" style ={button}> <strong>Buy</strong> </button>
                            </Link>
                   
                </div>
            </div>
            <br></br>

    <div class="product">
      <div class="product-image">
        
            <img src= {blender} alt="Product image" style={image}></img>
    
    </div>
    <div class="product-details">
        <p style ={myTitle} class="title">Tefal BL967B HIGH SPEED BLENDER</p>
        <p class="price"><strong>HK$1,478</strong></p>
        <br></br>
        <div style={details} class="details">
        <p>With the new Dynamix Cook heating ultra high speed blender, unleash your super you! 
           Enjoy a variety of tasty hot and cold preparations thanks to precise temperature control for the very best in flavor, 
           and POWELIX TECHNOLOGY for ultra-smooth results. Ten automatic programs and a powerful motor make a wide range of preparations fast and easy</p>
            <br></br>
        </div>
        <Link to='/payment' target="_blank">
                        <button type="button" style ={button}> <strong>Buy</strong> </button>
                            </Link>
    </div>
   </div>
   <br></br>
   <div class="product">
        <div class="product-image">
            <img src= {cooker}  alt="Product image" style={image}></img>
        </div>
            <div class="product-details">
            <p style ={myTitle} class="title">Tefal RK7621 IH Magnetic Rice Cooker</p>
            <p class="price"><strong>HK$1,488</strong></p>
            <br></br>
            <div style={details} class="details">
           <p>XPRESSCOOK technology injects fresh air into the pot during the cooking process to achieve continuous boiling, 
            which speeds up the cooking time by up to 2 times, and takes only 19 minutes to complete immediately (1 cup of jasmine rice), 
            precise IH temperature control and 360 degree heating, combined with a thick pot with excellent thermal circulation heating design, 
            so that you can enjoy a healthy and heartwarming taste at home even when you are busy.</p>
            <br></br>
        </div>
                    <Link to='/payment' target="_blank">
                        <button type="button" style ={button}> <strong>Buy</strong> </button>
                            </Link>
                </div>
     </div>
     <br></br>
     <div class="product">
                <div class="product-image">
                    <img src={juicer} alt="Product image" style={image}></img>    
                </div>
                <div class="product-details">
                    <p style ={myTitle} class="title">Tefal ZE420D juicer</p>
                    <p class="price"><strong>HK$448</strong></p>
                    <br></br>
                    <div style={details} class="details">
                   <p>The Tefal Frutelia + juicer brings you perfect, healthy, fresh juices every day. 
                    The wider opening allows you to easily fit large pieces or even whole fruits. 
                    The 400-watt juicer has a pulse function to shred, crush and mix ingredients. 
                    The elegant stainless steel finish is the best design for your kitchen.</p>
                        <br></br>
                    </div>
                    <Link to='/payment' target="_blank">
                        <button type="button" style ={button}> <strong>Buy</strong> </button>
                            </Link>
                </div>
      </div>
      <br></br>
      <div class="product">
                <div class="product-image">
                   
                        <img src={iron} alt="Product image" style={image}></img>
                  
                </div>
                <div class="product-details">
                    <p style ={myTitle} class="title">Tefal FV9845 3000W ULTIMATE ANTI-CALC STEAM IRON</p>
                    <p class="price"><strong>HK$1,038</strong></p>
                    <br></br>
                    <div style={details} class="details">
                    <p>
                    Powerful long-lasting ironing performance, perfect results
                    Ultimate Anti-Calc lets you handle large quantities of laundry quickly and flawlessly. 
                    Tefu's exclusive calcium remover delivers long-lasting performance, combined with powerful vapor power, 
                    to thoroughly iron crepe folds.</p>
                        <br></br>
                    </div>
                    <Link to='/payment' target="_blank">
                        <button type="button" style ={button}> <strong>Buy</strong> </button>
                            </Link>
                </div>
      </div>
      <br></br>
      <div class="product">
                <div class="product-image">
                        <img src={tv} alt="Product image" style={image}></img>
                </div>
                <div class="product-details">
                    <p style ={myTitle} class="title">Samsung QA55Q70CAJXZK 55" 4K QLED TV</p>
                    <p class="price"><strong>HK$13,980</strong></p>
                    <br></br>
                    <div style={details} class="details">
                       <p>Quantum processor 4K
                          Quantum HDR has a wider contrast ratio
                          Supports Motion Xcelerator Turbo+ and FreeSync Premium Pro
                          Smart Hub</p>
                        <br></br>
                    </div>
                    <Link to='/payment' target="_blank">
                        <button type="button" style ={button}> <strong>Buy</strong> </button>
                            </Link>
                </div>
      </div>
      <br></br>
      <div class="product">
                <div class="product-image">
                    <img src={dishwasher}  alt="Product image" style={image}></img>
                </div>
                <div class="product-details">
                    <p style ={myTitle} class="title">Rasonic RDW-J6W dishwashing drive</p>
                    <p class="price"><strong>HK$2,980</strong></p>
                    <br></br>
                    <div style={details} class="details">
                    <p> Rated power: 950 watts
                        Rated water pressure: 0.1-1.0MPa (only for fixed installations)
                        Built-in tank capacity: approx. 5 liters
                        2-in-1 installation method, manual water injection or water pipe filling can be selected as needed (fixed installation)
                        The double-layer bowl and chopstick basket can wash up to 32 pieces of tableware at the same time, and is also suitable for families of 5-6 people</p>
                        <br></br>
                    </div>
                    <Link to='/payment' target="_blank">
                        <button type="button" style ={button}> <strong>Buy</strong> </button>
                            </Link>
                </div>
      </div>
      <br></br>
      <div class="product">
                <div class="product-image">
                    <img src={heater}  alt="Product image" style={image}></img>
                </div>
                <div class="product-details">
                    <p style ={myTitle} class="title">GermanPool GPU-6SSL quick-heating electric water heater</p>
                    <p class="price"><strong>HK$4,437</strong></p>
                    <br></br>
                    <div style={details} class="details">
                    <p>Patent Double Bold Design (Patent No.: ZL 2016 2 1143463.4)
                       Beyond traditional storage electric water heaters
                       Heat quickly, 5°C in 40 minutes
                       Power: 3.0 kW (220 V)
                       Effectively extend the hot water supply time with continuous showering for up to 40 minutes*
                       Energy saving up to 70%, saving water and electricity is even more economical
                       Dedicated water-saving energy-saving shower head</p>
                        <br></br>
                    </div>
                    <Link to='/payment' target="_blank">
                        <button type="button" style ={button}> <strong>Buy</strong> </button>
                            </Link>
                </div>
      </div>
</div>

  )
 
}
  

export default Products;