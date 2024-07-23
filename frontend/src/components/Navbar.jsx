<<<<<<< HEAD
// import { CgProfile } from "react-icons/cg";
// import logo from '../images/logo.png';
// import '../css/Navbar.css'
// import axios from "axios";
// import { useEffect } from "react";

// const Navbar = () => {

//     useEffect(() => {
//         axios.get('http://localhost:3000/favorites')
//         .then(res => {
//             setFavorites(res.data);
//         })
//         .catch(err => {
//             console.log('error: ', err);
//         })
//     });

//     return(
//         <>
//         <div>
//             <img src={ logo } height={300} width={150}/>
//         </div>
//         <div>
//             <h1>Welcome to PalatePilot!</h1>
//         </div>
//         <div id="userIcon">
//             <CgProfile />
//             <h6>Username</h6>
//         </div>
//         </>
//     )
// }

// export default Navbar;
=======
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/logo.png'

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Profile</Nav.Link>
            <Nav.Link href="/auth/login">Login</Nav.Link>
            <Nav.Link href="/auth/signup">Sign up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
>>>>>>> 76edb98d6f3af83cd1a66b26ce68c6c288a477f2
