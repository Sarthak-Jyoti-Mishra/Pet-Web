import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ProfileCard.css';

function ProfileCard(props) {
  return (
    <div className='profilecard'>
      <img src={props.profilecardImg} alt={`${props.profilecardHeading} profile`} />
      <h2>{props.profilecardHeading}</h2>
      <p>{props.profilecardDesc}</p>
      <ul className="social-links">
       <a href="https://www.instagram.com/accounts/login/?hl=en" target= '_blank'> <li> <a href={props.instagram}><FontAwesomeIcon icon={faInstagram} /></a></li> </a> 
       <a href="https://www.facebook.com"> <li><a href={props.facebook}><FontAwesomeIcon icon={faFacebook} /></a></li> </a> 
       <a href="https://www.twitter.com"> <li><a href={props.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li> </a> 
       <a href="https://www.web.whatsapp.com"> <li><a href={props.whatsapp}><FontAwesomeIcon icon={faWhatsapp} /></a></li></a>
      </ul>
    </div>
  );
}

export default ProfileCard;
