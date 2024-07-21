<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
>>>>>>> 9c5f1c7821fbb847bf01541b1e31372060bf7b69

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
<<<<<<< HEAD
  return (
=======

  const handleClick = () => {
    console.log('Button has been clicked!');
  };


  return ( 
>>>>>>> 9c5f1c7821fbb847bf01541b1e31372060bf7b69
    <>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      
      <Navbar />

      <button onClick={handleClick} style={{ backgroundColor: '#6499E9', color: '#BEFFF7' }}>CLICK HERE!</button>

      <div>
        {data}
      </div>

      <div className="container">
        <h2>Select a Continent</h2>
      </div>
    </>
  );
}

export default App;