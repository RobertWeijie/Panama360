import React from 'react';
import { FaWeixin, FaWeibo, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contáctenos</h1>
      
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <h3>Teléfono</h3>
          <p>---------</p>
        </div>

        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <h3>Correo</h3>
          <p>panamapty360@gmail.com</p>
        </div>

        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Direccion</h3>
          <p>Panama</p>
          <p>Panama</p>
        </div>
      </div>

      <div className="social-media">
        <h2>Síganos</h2>
        <div className="social-icons">
          <a href="https://x.com/IIEESpty" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://youtube.com/@pty360?si=yALhu8s4bGJdBrnh" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 