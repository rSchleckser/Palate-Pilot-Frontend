import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/signUp';
import Review from './components/Review';
import ProfilePage from './components/ProfilePage';
import * as palatePilotService from './services/palatePilotService';
import Card from './components/Card';
import './App.css';

function App() {
  // const [food, setFood] = useState([]);

  // const fetchFoodData = async () => {
  //   const data = await palatePilotService.getData();
  //   const newFoodState = data.results.map((food) => {
  //     return {
  //       name: food.name,
  //       description: food.description,
  //       recipeLink: food.recipeLink,
  //       image: food.image,
  //       reviews: food.reviews,
  //     };
  //   });
  //   setFood(newFoodState);
  // };

  // useEffect(() => {
  //   fetchFoodData();
  // }, []);

  // const [country, setCountry] = useState([]);

  // const fetchCountryData = async () => {
  //   const data = await palatePilotService.getData();
  //   const newCountryState = data.results.map((country) => {
  //     return {
  //       name: country.name,
  //       continent: country.continent,
  //       foods: country.foods,
  //     };
  //   });
  //   setCountry(newCountryState);
  // };

  // useEffect(() => {
  //   fetchCountryData();
  // }, []);

  // const [review, setReview] = useState([]);

  // const fetchReviewData = async () => {
  //   const data = await palatePilotService.getData();
  //   const newReviewState = data.results.map((review) => {
  //     return {
  //       user: 'userID',
  //       food: 'foodID',
  //       rating: review.rating,
  //       comment: review.comment,
  //     };
  //   });
  //   setReview(newReviewState);
  // };

  // useEffect(() => {
  //   fetchReviewData();
  // }, []);

  // const foods = [
  //   {
  //     name: 'Butter Chicken',
  //     recipeLink: 'https://www.example.com/butter-chicken',
  //     description: 'A rich and creamy dish with a blend of spices.',
  //     image: '/images/butter-chicken.jpg',
  //     country: 'India',
  //     reviews: [],
  //   },
  //   {
  //     name: 'Peking Duck',
  //     recipeLink: 'https://www.example.com/peking-duck',
  //     description: 'A famous duck dish known for its crispy skin.',
  //     image: '/images/peking-duck.jpg',
  //     country: '',
  //     reviews: [],
  //   },
  //   {
  //     name: 'Sushi',
  //     recipeLink: 'https://www.example.com/sushi',
  //     description: 'A traditional Japanese dish with vinegared rice.',
  //     image: '/images/sushi.jpg',
  //     country: '',
  //     reviews: [],
  //   },
  // ];

  //Sample Data for Profile Page- will update
  const username = 'John Doe';
  const favorites = ['Pizza', 'Burger', 'Sushi'];
  const reviews = [
    'Great food at the local diner.',
    'Loved the ambiance at the Italian restaurant.',
    'Would not recommend the new burger place.',
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/auth/login' element={<Login />} />
        <Route
          path='/profile'
          element={
            <ProfilePage
              username={username}
              favorites={favorites}
              reviews={reviews}
            />
          }
        />
        <Route path='/reviews' element={<Review />} />
      </Routes>

      <div>
        {/* <button onClick={handleClick} style={{ backgroundColor: '#6499E9', color: '#BEFFF7' }}>
          CLICK HERE!
        </button> */}
      </div>
    </>
  );
}

export default App;
