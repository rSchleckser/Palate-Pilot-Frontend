import { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/cards')
      .then(res => {
        setCards(res.data);
      })
      .catch(err => {
        console.error('Error fetching cards:', err);
      });
  }, []);

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h2>{card.country}</h2>
          <p>{card.facts}</p>
          <div className="drop-card">
            <h3>{card.dish.name}</h3>
            <img src={card.dish.image} alt={card.dish.name} />
            <p>{card.dish.description}</p>
            <p>{card.dish.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
