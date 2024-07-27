import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import SignUp from './components/signUp';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import UserReviews from './components/UserReviews';
import UserFavorites from './components/UserFavorites';
import Meals from './components/Meals';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Welcome />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/userreviews' element={<UserReviews />} />
        <Route path='/userfavorites' element={<UserFavorites />} />
        <Route path='/foods' element={<Meals />} />
      </Routes>
    </>
  );
}

export default App;
