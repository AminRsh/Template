/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react';
import phoneHeader from '../../assets/phone-header-bg.png';
import './Header.css';
import { BsMouse } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <section id="header">
      <div className="container header">
        <div className="header-right" data-aos="fade-right">
          <h1>
            <span>Global Leader</span>
            <span>Security in All platform</span>
            <span>Messaging System</span>
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel voluptatem sequi aliquam consectetur at ducimus quibusdam, explicabo voluptate</p>
          <div className="header-btn">
            <a href="" className='btn btn-dark'>Let's Start</a>
            <a href="" className='btn btn-light'>What's Our Plan</a>
          </div>
        </div>
        <div className="header-left" data-aos="fade-left">
          <img src={phoneHeader} alt="" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color='#fff' size={25} className="mouse" />
        </a>
      </div>
    </section>
  )
};

export default Header;
