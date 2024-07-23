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

