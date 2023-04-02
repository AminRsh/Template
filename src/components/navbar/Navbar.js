/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import './Navbar.css';

const Navbar = () => {

  const [showIcon, setshowIcon] = useState(false);

  const toggleMenu = () => {
    setshowIcon(!showIcon)
  }


  return (
    <nav className="navbar container">
      <div className="menu">
        <ul className="nav-links" id={showIcon ? "show-links-mobile" : "show-links-mobile-hide"} >
          <li><a href="#header" >Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="#subscribe">Join</a></li>
          <li><a href="" className="btn btn-dark">Learn More</a></li>
        </ul>
      </div>
      <div className="logo">
        <p className="logo-text">
          Social
          <span>X</span>
        </p>
        <SiAnaconda color="#fff" size={30} />
      </div>
      <div className="menu-icons" onClick={toggleMenu}>
        { showIcon ?  <RiCloseLine size={30} color={"#fff"} cursor={"pointer"} />
        : <AiOutlineBars size={30} color={"#fff"} cursor={"pointer"} />
          }
      </div>
    </nav>
  )
};

export default Navbar;
