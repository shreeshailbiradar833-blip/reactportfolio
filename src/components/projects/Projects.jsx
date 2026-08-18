import React from 'react'
import "./Projects.css"
import Cards from "../cards/Cards";
import j2ee from "../../assets/animated portfolio using react/studentdatabase.png"
import text from "../../assets/animated portfolio using react/TextUtils.png"
import ecom from "../../assets/animated portfolio using react/ecommerce.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

 function Projects() {
  useGSAP(()=>{
    gsap.from("#para",{
      x:-100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2
      }

    })
    gsap.from(".slider",{
      x:-100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2
      }

    })
  })
  return (
    <div id="Projects">
      
      <h1 id='para'>2+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Cards heading="Student Database Management Using J2EE framework " images={j2ee}/>
        <Cards heading="TextUtils using React" images={text}/>
        <Cards heading="E-Commerce web using SpringBoot" images={ecom}/>
        
      </div>
      

    </div>
  )
}
export default Projects;
