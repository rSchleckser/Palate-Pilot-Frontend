import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/signUp';
import Card from './components/Card';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/data') // Adjust the endpoint if needed
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>

      <div>
        <div>
          {countries.length > 0 ? (
            <div>{JSON.stringify(countries)}</div> // Displaying data, adjust as needed
          ) : (
            <p>Loading data...</p>
          )}
        </div>
        <div className='container'>
          <h2>Select a Continent</h2>
          <div className="card-container">
            {countries.map((countryData, index) => (
              <Card
                key={index}
                country={countryData.country}
                facts={countryData.facts}
                dish={countryData.dish}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


