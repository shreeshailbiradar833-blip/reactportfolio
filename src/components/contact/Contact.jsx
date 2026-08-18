import React from 'react'
import"./Contact.css" 
import con from "../../assets/animated portfolio using react/Contact.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

 function Contact() {
  useGSAP(()=>{
     gsap.from(".leftContact",{
      x:-100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:".leftContact",
        scroll:"body",
        scrub:2
      }

    })
    gsap.from(".rightContact",{
      x:100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:".rightContact",
        scroll:"body",
        scrub:2
      }

    })
  })
  return (
    <div id="Contact">
      <div className="leftContact">
        <img src={con} alt="" />
      </div>
      <div className="rightContact">
        <form action="https://formspree.io/f/xykrqqgp" method='post'>
          <input type="text" name='username' placeholder='username' />
          <input type="email" name="email" id="mail" placeholder='mail' />
          <textarea name="message" id="textArea"></textarea>
          <input type="submit" id='btn' value="Submit" />
        </form>
      </div>

    </div>
  )
}
export default Contact;
