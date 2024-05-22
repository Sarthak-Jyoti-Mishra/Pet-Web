import React from 'react'
import './ProductCard.css'
function ProductCard(props) {
  return (
    <div className='card productCard'>
       <img src={props.productcardImg} />
        <h2 className='strike'>{props.productcardHeading}</h2>
        <h2 className='nonstrike'>{props.productcardHeading2}</h2>
        <button className='buyNow'>Buy Now</button>
    </div>
  )
}

export default ProductCard

