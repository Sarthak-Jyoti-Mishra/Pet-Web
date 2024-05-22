import React from 'react'
import ProductCard from './ProductCard'
import './Services.css'
import './Services2.css'

function Services2() {
  return (
    <div className='services services2'>
      <h1>Title Here</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, autem.</p>
      <div className="service-card service-card2">
        <ProductCard
            productcardImg = 'src\assets\Dog1.png'
            productcardHeading = '$50' productcardHeading2 = '$30'
        />
        <ProductCard
            productcardImg = 'src\assets\Dog2.png'
            productcardHeading = '$40' productcardHeading2 = '$25'
        />
        <ProductCard
            productcardImg = 'src\assets\Dog3.png'
            productcardHeading = '$45' productcardHeading2 = '$20'
        />
        
      </div>
    </div>
  )
}

export default Services2
