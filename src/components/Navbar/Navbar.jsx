import React from 'react';
import "./Navbar.scss";
import {Link as SCLink} from 'react-scroll';

const Navbar = () => {
  return (
    <div className="app__navbar">
        <div className="app__navbar-logo">
            <h2>COEP Tech</h2>
        </div>
        <div className="app__navbar-menu">
            <SCLink to="about">About</SCLink>
            <SCLink to="courses">Courses</SCLink>
            <SCLink to="gallery">Gallery</SCLink>
            
        </div>
    </div>
  )
}

export default Navbar