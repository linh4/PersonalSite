import React from 'react';
import chair from '../images/chair.png'
import contacts from '../data/contacts.json'

const contactList = () => contacts.map(contact => (
  <div key={contact.name}>
    {contact.name === "Email" ? <a href={contact.url}>{contact.name}</a> : <a href={contact.url} target="_blank" rel="noopener noreferrer">{contact.name}</a>}
  </div>
))

const Footer = () => (
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
        {contactList()}
      </div>
      <div className="built">
        © {new Date().getFullYear()}, Built With Love in NYC
      </div>
    </div>
  </div>
)

export default Footer;
