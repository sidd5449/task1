import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <div className="app__footer">
        <div className="app__footer-left">
            <h2>COEP Tech</h2>
            <p>Contact: 1234567890</p>
            <p>Email: lorem@ipsum.com</p>
        </div>
        <div className="app__footer-right">
            <a href="/">Features</a>
            <a href="/">Courses</a>
            <a href="/">Infrastructure</a>
            <a href="/">Gallery</a>
        </div>
    </div>
  )
}

export default Footer