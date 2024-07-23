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
