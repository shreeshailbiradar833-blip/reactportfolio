import "./Nav.css";
import { Link } from "react-scroll";
import { useRef } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Nav() {
  let menu=useRef();
  let mobile=useRef();
 useGSAP(() => {
  const tl = gsap.timeline();

  tl.from("nav h1", {
    y: -100,
    opacity: 0,
    duration: 0.8,
  });

  tl.from(".desktopMenu li", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
    clearProps: "all",
  });
}, []);
  return (
    <nav>
      
      <h1>PORTFOLIO</h1>

      <ul className="desktopMenu">
        <li>
          <Link to="Home" smooth={true}  offset={-80} activeClass="active" spy={true} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="About" smooth={true}  offset={-80} activeClass="active" spy={true}duration={500}>
            About
          </Link>
        </li>
        <li>
         <Link
  to="Projects"
  smooth={true}
  spy={true}
  offset={-80}
  duration={500}
  activeClass="active"
>
  Projects
</Link>
        </li>
        <li>
          <Link to="Contact"activeClass="active"  offset={-80} smooth={true} spy={true} duration={500}>
            contacts
          </Link>
        </li>
      </ul>
      <div className="hamBurger" ref={menu} onClick={()=>{
        mobile.current.classList.toggle("activemobile")
        menu.current.classList.toggle("activeham")

      }}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      <ul className="mobileMenu" ref={mobile}>
        <li>
          <Link to="Home" smooth={true}  offset={-80} activeClass="active" spy={true} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="About" smooth={true}  offset={-80} activeClass="active" spy={true}duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link
  to="Projects"
  smooth={true}
  spy={true}
  offset={-80}
  duration={500}
  activeClass="active"
>
  Projects
</Link>
        </li>
        <li>
          <Link to="Contact"activeClass="active"   offset={-80} smooth={true} spy={true} duration={500}>
            contacts
          </Link>
        </li>
      </ul>
  
    </nav>
  );
}