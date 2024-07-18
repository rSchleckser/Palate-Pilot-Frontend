import React, { useEffect, useState } from 'react';
import Button from './components/Buttons';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);


  const handleClick = () => {
    console.log('Button has been clicked!');
  };

  return ( 
    <>
      <div>
        <h1>PalatePilot</h1>
        <Button buttonName={'CLICK HERE!'} onClick={handleClick} style={{ backgroundColor: '#6499E9', color: '#BEFFF7' }}></Button>
      </div>
    </>
  );
}

export default App;
