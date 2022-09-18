import React from 'react';
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="app__navbar">
        <div className="app__navbar-logo">
            <h2>COEP Tech</h2>
        </div>
        <div className="app__navbar-menu">
            <a href="/">Facilities</a>
            <a href="/">Courses</a>
            <a href="/">Infrastructure</a>
            <a href="/">Gallery</a>
        </div>
    </div>
  )
}

export default Navbar