// Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import icon from '../assets/icon.png'

const Footer = (props) => {
  return (
    <footer className="footer" id='contact'>
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h2>About</h2>
          <ul>
            <li> <a href="">History</a> </li>
            <li> <a href="">Our Team</a> </li>
            <li> <a href="">Brand Guidelines</a> </li>
            <li> <a href="">Terms & Conditions</a> </li>
            <li> <a href="">Privacy Policy</a> </li>
          </ul>
        </div>
        <div className="footer-section footer-services">
          <h2>Services</h2>
          <ul>
            <li> <a href=""></a> How to Order</li>
            <li> <a href=""></a> Our Product</li>
            <li> <a href=""></a> Order Status</li>
            <li> <a href=""></a> Promo</li>
            <li> <a href=""></a> Payment Method</li>
          </ul>
        </div>
        <div className="footer-section footer-subscribe">
          <h2>Title Here</h2>
          <p>Lorem Ipsum available, but the majority</p>
          <div className="subscribe-box">
            <input type="text"  />
            <button>
              <img src={icon} alt="Send" />
            </button>
          </div>
          <div className="social-icons">
            <li><a href={props.instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href={props.facebook}><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href={props.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href={props.whatsapp}><FontAwesomeIcon icon={faWhatsapp} /></a></li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
