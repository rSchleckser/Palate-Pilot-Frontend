import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/signUp';
import Review from './components/Review';
// import Cards from './components/Card'
import './App.css';

function App() {
  // const handleClick = () => {
  //   console.log('Button has been clicked!');
  // };

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

        {/* <div className='container'> */}
        {/* <h2>Select a Continent</h2> */}
        {/* <div className="card-container">
                {countries.map((countryData, index) => (
                  <Card key={index} country={countryData.country} facts={countryData.facts} dish={countryData.dish} />
                ))}
              </div> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
