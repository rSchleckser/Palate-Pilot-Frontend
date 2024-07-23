import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/signUp'
import Review from './components/Review';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth/login');
  };

  const handleSignupClick = () => {
    navigate('/auth/signup');
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/reviews' element={<Review />} />
      </Routes>

      <div>
        <button className="login-button" onClick={handleLoginClick}>
          Login here
        </button>
      </div>

      <div>
        <button className="signup-button" onClick={handleSignupClick}>
          Signup here
        </button>
      </div>
    </>
  );
}

export default App;
