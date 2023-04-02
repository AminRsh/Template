import React from 'react';
import './Footer.css';
import logo from "../../assets/logo.png";
import {FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe,} from "react-icons/fa";


const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="quick-access">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="google.com">&bull; Support</a>
            <a href="google.com">&bull; About Us</a>
            <a href="google.com">&bull; Education</a>
            <a href="google.com">&bull; Hosting</a>
            <a href="google.com">&bull; Messanger</a>
          </div>
        </div>
        <div className="support">
        <h4>Support</h4>
          <div className="footer-links">
            <a href="google.com">&bull; Support</a>
            <a href="google.com">&bull; About Us</a>
            <a href="google.com">&bull; Education</a>
            <a href="google.com">&bull; Hosting</a>
            <a href="google.com">&bull; Messanger</a>
          </div>
        </div>
        <div className="contact">
          <h4>Links</h4>
          <div className="footer-contact">
          <div className="footer-contact">
            <p><FaMapMarkerAlt /> &nbsp; Adress: Toronto , North York</p>
            <p><FaPhoneAlt /> &nbsp; Tel : 0989111111111 </p>
            <p> <FaFax /> &nbsp; Fox : 0989111111111</p>
            <p> <FaEnvelope /> &nbsp; Email : Example@gmail.com</p>
            <p><FaGlobe /> &nbsp; Website : www.example.com </p>
          </div>
          </div>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="" />
          <p>&copy; Copyright 2021. Mohammadamin Roknsharifi</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
