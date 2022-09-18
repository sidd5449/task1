import React from 'react';
import "./Hero.scss";
import backImg from '../../assets/background.jpg';

const Hero = () => {
  return (
    <div className="app__hero">
      <div className="app__hero-left">
        <h1>Expanding Opportunities with a <span>New Campus</span></h1>

        <p>We are unveiling the new campus at Chikhali, a vibrant campus with all the facilities that are needed for your education.</p>

        <div className="app__hero-btns">
          <button>Facilities</button>
          <button id='infra'>Infrastructure</button>
        </div>
      </div>
      <div className="app__hero-right">
        <img src={backImg} alt="backImg" />
      </div>
    </div>
  )
}

export default Hero