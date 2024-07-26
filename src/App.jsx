import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/Signup';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import UserReviews from './components/UserReviews';
import UserFavorites from './components/UserFavorites';
import Meals from './components/Meals';

const App = () => {
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
        <Route path='/foods' element={<Meals />} />
      </Routes>
    </>
  );
};

export default App;
