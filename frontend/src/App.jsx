import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
=======
import { useState, useEffect } from 'react';
import Home from './components/Home';
>>>>>>> 4ff9bd8da0f1759d7926d46bb0db3308846c1192
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/signUp';
import Review from './components/Review';
<<<<<<< HEAD
// import Cards from './components/Card'
import './App.css';

function App() {
  // const handleClick = () => {
  //   console.log('Button has been clicked!');
  // };
=======
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
>>>>>>> 4ff9bd8da0f1759d7926d46bb0db3308846c1192

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
>>>>>>> 4ff9bd8da0f1759d7926d46bb0db3308846c1192
      </div>
    </>
  );
}

export default App;
