import React from 'react';
import './Client.css';
import care from '../assets/care.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCirclePlus, faStethoscope, faSyringe } from '@fortawesome/free-solid-svg-icons'; // Import faInstagram

function Client() {
  return (
    <div className='mainClient'>

    <div className='client'>
      <div className='client__container'>
        <img src={care} alt="Care" />
          
        
      </div>
    </div>
      <ul className='client__text'>
            <li><FontAwesomeIcon icon={faHeartCirclePlus} /> +34793 <p>Happy Clients</p></li>
            <li><FontAwesomeIcon icon={faStethoscope} /> +45382 <p>Departments</p>  </li>
            <li><FontAwesomeIcon icon={faSyringe} /> +54762 <p>Vaccinations</p> </li>
          </ul>
    </div>
  );
}

export default Client;
