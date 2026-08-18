import"./About.css"
import Cards from "../cards/Cards";
import java from "../../assets/animated portfolio using react/java.png"
import react from "../../assets/animated portfolio using react/mern.png"
import j2ee from "../../assets/animated portfolio using react/j2ee.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function About() {
  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2
      }

    })
    gsap.from(".line",{
      x:-100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2
      }

    })
    gsap.from(".aboutdetails h1",{
      x:-100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2
      }

    })
    gsap.from(".aboutdetails ul",{
      y:100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails ul",
        scroll:"body",
        scrub:2
      }

    })
    gsap.from(".rightAbout",{
      x:100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:".rightAbout",
        scroll:"body",
        scrub:2
      }

    })
    
    
  }) 
  return (
    <div id="About">

      <div className="leftAbout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
        <div className="personalInfo">
          <h1>PERSONAL INFO</h1>
          <ul>
            <li><span>NAME</span>: SHREESHAIL BIRADAR</li>
            <li><span>AGE</span>: 21</li>
            <li><span>GENDER</span>: MALE</li>
            <li><span>LAUNGUAGE KNOWN</span>: ENGLISH,HINDI,KANNADA</li>
            
            
          </ul>
        </div>
        <div className="Education">
          <h1>EDUCATION</h1>
          <ul>
            <li><span>DEGREE</span>: BACHELOR OF ENGINEERING</li>
            <li><span>BRANCH</span>: INFORMATION SCIENCE & ENGINEERING</li>
            <li><span>CGPA</span>: 8.0</li>
            
            
            
          </ul>
        </div>
        <div className="Skills">
          <h1>SKILLS</h1>
          <ul>
            <li>JAVA</li>
            <li>REACT</li>
            <li>J2EE</li>
            
            
          </ul>
        </div>
      </div>
      </div>
      
       <div className="rightAbout">
       <Cards heading="Java FullStack Devoleper" images={java} />
       <Cards heading="React" images={react} />
       <Cards heading="J2EE" images={j2ee}/>
      
      </div>
    


      
    </div>
   
  );
}

export default About;