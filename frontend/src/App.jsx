import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    console.log('Button has been clicked!');
  };

  const countries = [
    { 
      country: "India", 
      facts: "India is the seventh-largest country by land area.",
      dish: {
        name: "Butter Chicken",
        image: "/images/butter-chicken.jpg",
        description: "A rich and creamy dish with a blend of spices.",
        review: "Delicious and flavorful!"
      }
    },
    {
      country: "China",
      facts: "China is the most populous country in the world.",
      dish: {
        name: "Peking Duck",
        image: "/images/peking-duck.jpg",
        description: "A famous duck dish known for its crispy skin.",
        review: "Crispy and flavorful!"
      }
    },
    {
      country: "Japan",
      facts: "Japan is an island country in East Asia.",
      dish: {
        name: "Sushi",
        image: "/images/sushi.jpg",
        description: "A traditional Japanese dish with vinegared rice.",
        review: "Fresh and exquisite!"
      }
    }
  ];

  return ( 
    <>
      <div>
        <h1>PalatePilot</h1>
        <button onClick={handleClick} style={{ backgroundColor: '#6499E9', color: '#BEFFF7' }}>CLICK HERE!</button>
      </div>

      <div className="container">
        <h2>Select a Continent</h2>
        <div className="card-container">
          {countries.map((countryData, index) => (
            <Card key={index} country={countryData.country} facts={countryData.facts} dish={countryData.dish} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
