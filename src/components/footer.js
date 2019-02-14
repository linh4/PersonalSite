import React from 'react';
import chair from '../images/chair.png'
import cv from '../images/Linh Huynh Resume.pdf'

const Footer = () => {
  return (
    <div className="bottom">
      <div className="let-talk">
        <div className="text-top">
          <img src={chair} alt="chair"/>
        </div>
        <div className="text-middle">
          <strong>Let's Talk!</strong><br/>
          I'd love to grab coffee or tea to talk about anything - from apps and tech to food and travel. Hit me up and we can chat!
        </div>
        <div>
          <a href="mailto:linh44h@gmail.com" className="contact">Get In Touch</a>
        </div>
      </div>
      <hr/>
      <div className="links">
        <div className="social-media">
          <div><a href="https://www.linkedin.com/in/linh-huynh-nyc/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
          <div><a href="https://github.com/linh4" target="_blank" rel="noopener noreferrer">Github</a></div>
          <div><a href="https://medium.com/@linh_huynh_z" target="_blank" rel="noopener noreferrer">Medium</a></div>
          <div><a href="mailto:linh44h@gmail.com">Email</a></div>
        </div>
        <div className="built">
          © {new Date().getFullYear()}, Built With Love in NYC
        </div>
      </div>
    </div>
  )
}

export default Footer;
