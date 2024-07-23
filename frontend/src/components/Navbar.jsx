<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 5a80e1d254c90fa56a6bb38080695f8adce2534f
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';

const MyNavbar = () => {
  return (
    <>
      <Navbar bg='light' data-bs-theme='light'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='Logo'
            />
            Palate Pilot
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/'>Profile</Nav.Link>
            <Nav.Link href='/auth/login'>Login</Nav.Link>
            <Nav.Link href='/auth/signup'>Sign up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
