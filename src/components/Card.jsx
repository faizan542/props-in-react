import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.image} style={{width:"400px", height:"400px"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
