// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Card from './components/Card';

const App = () => {
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
    <Router>
      <div>
        <h1>Select a Continent</h1>
        <nav>
          <ul>
            <li><Link to="/asia">Asia</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/asia">
            <h2>Countries in Asia</h2>
            {countries.map((countryData, index) => (
              <Card key={index} country={countryData.country} facts={countryData.facts} dish={countryData.dish} />
            ))}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

