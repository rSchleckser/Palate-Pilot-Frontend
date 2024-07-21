<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'; // No Router import here
import Card from './components/Card';
import Navbar from './components/Navbar';
import ReviewPage from './components/ReviewDish'; // Ensure this import is correct
import Login from './components/Login';
import Signup from './components/Signup'; 
import './App.css';
=======
import Card from './components/Card';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
>>>>>>> 9c5f1c7821fbb847bf01541b1e31372060bf7b69
>>>>>>> ae77ca691bf4ce1baa5dc27739859281ca87b2d2

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data') // Adjust the endpoint if needed
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
<<<<<<< HEAD
  return (
=======

  const handleClick = () => {
    console.log('Button has been clicked!');
  };

<<<<<<< HEAD
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
=======

  return ( 
>>>>>>> 9c5f1c7821fbb847bf01541b1e31372060bf7b69
>>>>>>> ae77ca691bf4ce1baa5dc27739859281ca87b2d2
    <>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={
          <div>
            <button onClick={handleClick} style={{ backgroundColor: '#6499E9', color: '#BEFFF7' }}>
              CLICK HERE!
            </button>
            <div>
              {data.length > 0 ? (
                <div>{JSON.stringify(data)}</div> // Displaying data, adjust as needed
              ) : (
                <p>Loading data...</p>
              )}
            </div>
            <div className="container">
              <h2>Select a Continent</h2>
              <div className="card-container">
                {countries.map((countryData, index) => (
                  <Card key={index} country={countryData.country} facts={countryData.facts} dish={countryData.dish} />
                ))}
              </div>
            </div>
          </div>
        } />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
=======

      <button onClick={handleClick} style={{ backgroundColor: '#6499E9', color: '#BEFFF7' }}>CLICK HERE!</button>

      <div>
        {data}
      </div>

      <div className="container">
        <h2>Select a Continent</h2>
      </div>
>>>>>>> ae77ca691bf4ce1baa5dc27739859281ca87b2d2
    </>
  );
}

<<<<<<< HEAD
export default App;

=======
export default App;
>>>>>>> ae77ca691bf4ce1baa5dc27739859281ca87b2d2
