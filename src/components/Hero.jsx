import React from 'react'
import './Hero.css'
import dogImage from '../assets/DogImage.png'
function Hero() {
  return (
    <div className='hero' id= 'home'>
        <div className="content">
          <h2>
            First I wanted to be <br /> a veterinarian
          </h2>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quia nostrum distinctio sapiente impedit maxime in, sunt cumque tenetur nisi, minus deleniti vero, eveniet quo vel enim? Eius, consectetur non!</p>
          
          <button className='contactUs'>Contact Us</button>
          <button className='ourService'>Our Service</button>

        </div>
        <div className="dogImg">
          <img src={dogImage} className='dogImage'/>
        </div>

    </div>
)
}

export default Hero
