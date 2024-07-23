import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/signUp'
import Review from './components/Review';
import './App.css';

function App() {

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
        {/* <button onClick={handleClick} style={{ backgroundColor: '#6499E9', color: '#BEFFF7' }}>
              CLICK HERE!
            </button> */}

        <div>
          {data.length > 0 ? (
            <div>{JSON.stringify(data)}</div> // Displaying data, adjust as needed
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
