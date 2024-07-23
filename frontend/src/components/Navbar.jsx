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
