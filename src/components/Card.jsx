import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className='main'>
      <div className='card'>
        <img src={props.cardImg} />
        <h2>{props.cardHeading}</h2>
        <p>{props.cardDesc}</p>
      </div>
    </div>
  )
}

export default Card
