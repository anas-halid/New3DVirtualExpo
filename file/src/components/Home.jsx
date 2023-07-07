import React, { useState , useEffect, useRef } from 'react';
import * as PANOLENS from "panolens";
import background from './pano3.jpg' ; 



const Home = () => {


    const panorama = new PANOLENS.ImagePanorama(background);
    const viewer = new PANOLENS.Viewer({
      container: document.querySelector("#coucou"),
      controlBar: false
    });
    var infospot, infospot2, infospot3, infospot4;
    
    // each infospot is a booth - Anas
    infospot = new PANOLENS.Infospot();
    infospot.position.set( 5000.00, -665.23, -3996.49 );
    infospot.addHoverText( 'This is a test to showcase booth interactivity' );
    
    
    infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    infospot2.position.set( -5000.00, -1825.25, 197.56 );
    infospot2.addEventListener('click', function () {
      window.location.replace("booth") // contacts is temporary, it should be booth 1, I used this for showcasing and error fixing
    });

    infospot3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    infospot3.position.set( -2500.00, -205.25, 300.56 );
    infospot3.addEventListener('click', function () {
      window.location.replace("Login") // contacts is temporary, it should be booth 2, I used this for showcasing and error fixing
    });

    infospot4 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    infospot4.position.set( -5300.00, 535.25, -3000.56 );
    infospot4.addEventListener('click', function () {
      window.location.replace("Aboutus") // contacts is temporary, it should be booth 3, I used this for showcasing and error fixing
    });
    
    
      
    panorama.add( infospot );
    panorama.add( infospot2 );
    panorama.add( infospot3 );
    panorama.add( infospot4 );
    
    
    viewer.add(panorama);
    
    



  useEffect(() => {
    viewer.onWindowResize();
    
  }, []);



  return (
  <>
     
     <h1><b>Welcome to L̶o̶s̶ ̶P̶o̶l̶l̶o̶s̶ ̶H̶e̶r̶m̶a̶n̶o̶s 2023 Virtual Tech Expo</b></h1> {/* I'm finally done with the EXPO part implementation (there's still the booth part) of the 3D implementation... IT's 3:26am rn HAHAHAHA - ANAS */}
      <div id="coucou" />
  
  </>
);
}

export default Home;