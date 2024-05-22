import React from 'react'
import '../components/Services.css';
// import '../components/Services2.css'
import Card from './Card';
function Services() {
  return (
    <div className='services' id='services'>
      <h1>Our Services</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, autem.</p>
      <div className="service-card">
        <Card 
        cardImg = 'src\assets\service-card-1.png'
        cardHeading = 'Veterinarian'
        cardDesc = 'lorem ipsum available, but the majority have sufferd altration in some.'
        />

        <Card 
         cardImg = 'src\assets\service-card2.png'
         cardHeading = 'Vaccination Care'
         cardDesc = 'lorem ipsum available, but the majority have sufferd altration in some.'
        />
        <Card 
         cardImg = 'src\assets\service-card3.png'
         cardHeading = 'Dental Care'
         cardDesc = 'lorem ipsum available, but the majority have sufferd altration in some.'
        />
      </div>
    </div>
  )
}

export default Services
