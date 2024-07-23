import React, { useEffect, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import axios from 'axios';
import logo from '../images/logo.png';
import '../css/Navbar.css';

const Navbar = () => {
  const [navbarData, setNavbarData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/Navbar')
      .then(res => {
        setNavbarData(res.data);
      })
      .catch(err => {
        console.log('error: ', err);
      });
  }, []);

  return (
    <>
      <div>
        <img src={logo} height={300} width={150} alt="Logo"/>
      </div>
      <div>
        <h1>Welcome to PalatePilot!</h1>
      </div>
      <div id="userIcon">
        <CgProfile />
        <h6>Username</h6>
      </div>
    </>
  );
};

export default Navbar;
