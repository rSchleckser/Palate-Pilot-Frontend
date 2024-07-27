import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

const MyNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');

    // Redirect to the login page or home page
    navigate('/auth/login');
  };

  // Check if user is logged in by checking if there's a token in local storage
  const isLoggedIn = !!localStorage.getItem('token');

  return (
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
          {isLoggedIn && <Nav.Link href='/profile'>Profile</Nav.Link>}
          {!isLoggedIn ? (
            <>
              <Nav.Link href='/auth/login'>Login</Nav.Link>
              <Nav.Link href='/auth/signup'>Sign up</Nav.Link>
            </>
          ) : (
            <Button variant='link' onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
