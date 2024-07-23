<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
=======
<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
=======
import { Route, Routes} from 'react-router-dom';
>>>>>>> 5a80e1d254c90fa56a6bb38080695f8adce2534f
import { useState, useEffect } from 'react';
import Home from './components/Home';
>>>>>>> fbcb7471328c3434fba29f9d46b0dab9fea94ecc
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
<<<<<<< HEAD
import SignUp from './components/signUp';
=======
<<<<<<< HEAD
import SignUp from './components/signUp';
import Review from './components/Review';
// import Cards from './components/Card'
import './App.css';

function App() {
  // const handleClick = () => {
  //   console.log('Button has been clicked!');
  // };
=======
import SignUp from './components/signUp'
>>>>>>> 5a80e1d254c90fa56a6bb38080695f8adce2534f
import Review from './components/Review';
import * as palatePilotService from './services/palatePilotService';
import './App.css';

function App() {
  const [food, setFood] = useState([]);

  const fetchFoodData = async () => {
    const data = await palatePilotService.getData();
    const newFoodState = data.results.map((food) => {
      return {
        name: food.name,
        description: food.description,
        recipeLink: food.recipeLink,
        image: food.image,
        reviews: food.reviews,
      };
    });
    setFood(newFoodState);
  };

<<<<<<< HEAD
  useEffect(() => {
    fetchFoodData();
  }, []);

  const foods = [
    {
      name: 'Butter Chicken',
      recipeLink: 'https://www.example.com/butter-chicken',
      description: 'A rich and creamy dish with a blend of spices.',
      image: '/images/butter-chicken.jpg',
      country: 'India',
      reviews: [],
    },
    {
      name: 'Peking Duck',
      recipeLink: 'https://www.example.com/peking-duck',
      description: 'A famous duck dish known for its crispy skin.',
      image: '/images/peking-duck.jpg',
      country: '',
      reviews: [],
    },
    {
      name: 'Sushi',
      recipeLink: 'https://www.example.com/sushi',
      description: 'A traditional Japanese dish with vinegared rice.',
      image: '/images/sushi.jpg',
      country: '',
      reviews: [],
    },
  ];
=======
  const foods = [{
    name: 'Butter Chicken',
    recipeLink: 'https://www.example.com/butter-chicken',
    description: 'A rich and creamy dish with a blend of spices.',
    image: '/images/butter-chicken.jpg',
    country: 'India',
    reviews: []
  },
  {
    name: 'Peking Duck',
    recipeLink: 'https://www.example.com/peking-duck',
    description: 'A famous duck dish known for its crispy skin.',
    image: '/images/peking-duck.jpg',
    country: '',
    reviews: []
  },
  {
    name: 'Sushi',
    recipeLink: 'https://www.example.com/sushi',
    description: 'A traditional Japanese dish with vinegared rice.',
    image: '/images/sushi.jpg',
    country: '',
    reviews: []
  }
]
>>>>>>> fbcb7471328c3434fba29f9d46b0dab9fea94ecc
>>>>>>> 5a80e1d254c90fa56a6bb38080695f8adce2534f

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/reviews" element={<Review />} />
      </Routes>

      <div>
        {/* <button onClick={handleClick} style={{ backgroundColor: '#6499E9', color: '#BEFFF7' }}>
          CLICK HERE!
        </button> */}

<<<<<<< HEAD
        {/* <div className='container'> */}
        {/* <h2>Select a Continent</h2> */}
        {/* <div className="card-container">
                {countries.map((countryData, index) => (
                  <Card key={index} country={countryData.country} facts={countryData.facts} dish={countryData.dish} />
                ))}
              </div> */}
        {/* </div> */}
=======
        <div>
          {food.length > 0 ? (
            <div>{JSON.stringify(food)}</div> // Displaying food data, adjust as needed
          ) : (
            <p>Loading data...</p>
          )}
        </div>
>>>>>>> fbcb7471328c3434fba29f9d46b0dab9fea94ecc
      </div>
    </>
  );
}

export default App;
