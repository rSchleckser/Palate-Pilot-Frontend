import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Palate Pilot!</h1>
      <div className="home-content">
        <div className="home-text">
          <p>Explore popular foods from different countries and save your favorites with images and descriptions.</p>
          <p>Create an account to share and learn about culinary delights from around the globe!</p>
        </div>
        <div className="button-container">
          <LinkContainer to="/auth/login">
            <Button variant="light" className="me-2">Login</Button>
          </LinkContainer>
          <LinkContainer to="/auth/signup">
            <Button variant="light">Sign up</Button>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
}

export default Home;
