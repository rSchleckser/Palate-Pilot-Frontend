import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/signUp';
import Review from './components/Review';
import ProfilePage from './components/ProfilePage';
import UserReviews from './components/UserReviews';
import UserFavorites from './components/UserFavorites';
// import * as palatePilotService from './services/palatePilotService';
// import Card from './components/Card';
import './App.css';

function App() {
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
        <Route path='/userreviews' element={<UserReviews />} />
        <Route path='/userfavorites' element={<UserFavorites />} />
        <Route path='/reviews' element={<Review />} />
      </Routes>
    </>
  );
}

export default App;
