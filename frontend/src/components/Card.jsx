// src/components/Card.jsx
import React, { useState } from 'react';
import DropCard from './DropCard';

const Card = ({ country, facts, dish }) => {
  const [showDropCard, setShowDropCard] = useState(false);

  const handleToggle = () => {
    setShowDropCard(!showDropCard);
  };

  return (
    <div className="card">
      <h2 onClick={handleToggle}>{country}</h2>
      <p>{facts}</p>
      {showDropCard && <DropCard dish={dish} />}
    </div>
  );
};

export default Card;
