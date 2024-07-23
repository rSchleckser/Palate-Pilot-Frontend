import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import ReviewPage from './components/ReviewDish'; // Ensure this import is correct
import Login from './components/Login';
import SignUp from './components/signUp';
// import Cards from './components/Card'
import './App.css';

function App() {
  const [data, setData] = useState([]);

  // const handleClick = () => {
  //   console.log('Button has been clicked!');
  // };

  useEffect(() => {
    fetch('/api/data') // Adjust the endpoint if needed
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/auth/login' element={<Login />} />
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
