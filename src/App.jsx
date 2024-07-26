import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/signUp';
import Review from './components/Review';
import ProfilePage from './components/ProfilePage';
import UserReviews from './components/UserReviews';
import UserFavorites from './components/UserFavorites';
import Meals from './components/Card';
import './App.css';

function App() {
  
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
        <Route path='/foods' element={<Meals />} />
          <Route path='/profile'
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

      <div>
        {/* <button onClick={handleClick} style={{ backgroundColor: '#6499E9', color: '#BEFFF7' }}>
          CLICK HERE!
        </button> */}
      </div>
    </>
  );
}

export default App;
