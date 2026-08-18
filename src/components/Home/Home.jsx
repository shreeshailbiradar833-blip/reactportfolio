import React from "react";
import "./Home.css";
import man from "../../assets/animated portfolio using react/man.png"
import { Typewriter } from "react-simple-typewriter";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



function Home() {
  useGSAP(()=>{
    let  tl1=gsap.timeline();
    tl1.from(" #Line1",{
      y:50,
      opacity:0,
      duration:1
    })
    tl1.from("#Line2",{
      y:50,
      opacity:0,
      duration:1
    })
    tl1.from("#Line3",{
      y:50,
      opacity:0,
      duration:1
    })
    tl1.from("#rightHome img",{
      x:200,
      opacity:0,
      duration:1
    })

  })

  return (
    <div id="Home">
      
     
      <div id="leftHome">
        <div id="homeDetails">
          <div id="Line1">I'M</div>
          <div id="Line2">SHIVSHANTH BIRADAR</div>
          <div id="Line3">
            <Typewriter
    words={[
      "JAVA DEVELOPER",
      "JAVA FULL STACK DEVELOPER"
      
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={100}
    deleteSpeed={50}
    delaySpeed={1000}
  />

          </div>
          <button>HIRE ME</button>
        </div>
      </div>
       <div id="rightHome">
        <img src={man} alt="" />

      </div>
      
    </div>
  );
}

export default Home;