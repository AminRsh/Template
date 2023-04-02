import React, {useEffect} from 'react';
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import './Download.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Download() {

  useEffect(() => {
    AOS.init({
      duration : 3000
    });
  }, []);

  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <div className="download-title">
          <h2>Download Our Application</h2>
          <p>Our applications are available on all online stores</p>
        </div>
        <div className="download-apps">
          <div className="download-app">
            <FaApple />
            <p>iPhone</p>
          </div>
          <div className="download-app">
            <FaWindows />
            <p>Windows</p>
          </div>
          <div className="download-app">
            <GrAndroid />
            <p>Android</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download;
