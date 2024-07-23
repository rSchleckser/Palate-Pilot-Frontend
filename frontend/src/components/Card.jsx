<<<<<<< HEAD
import React from 'react';

const Card = ({ country, facts, dish }) => {
  return (
    <div className="card">
      <h2>{country}</h2>
      <p>{facts}</p>
      <div className="drop-card">
        <h3>{dish.name}</h3>
        <img src={dish.image} alt={dish.name} />
        <p>{dish.description}</p>
        <p>{dish.review}</p>
      </div>
    </div>
  );
};

export default Card;

=======
// src/components/Card.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';


const Cards = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cards')
    .then(res => {
      setCard(res.data);
    })
    .catch(err => {
      console.log('error: ', err)
    })
  });

  return(
    <>

      {card.map(card => {
        return(
          <>
          <div key={card.id}>
            <h1>{card.country}</h1>
          </div>
          <div>
            <h3>{card.foods}</h3>
          </div>
          <div>
            <h3>{card.reviews}</h3>
          </div>
          </>
        )
      })}

    </>
  )

}

export default Cards;
>>>>>>> 3c16609a1df00c03bcca540b088192610e3e0d45
