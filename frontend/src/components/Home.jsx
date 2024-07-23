import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

const Home = () => {

    return (
        <div>
            <h1>Welcome to Palate Pilot!</h1>
            {/* <Favorites />
            <Card /> */}
            <h5>Explore popular foods from different countries and save your favorites with images and descriptions. 
                Create an account to share and learn about culinary delights from around the globe!</h5>
            <div>
                
            <LinkContainer to="/auth/login">
              <Button variant="light" className="me-2">Login</Button>
            </LinkContainer>
            <LinkContainer to="/auth/signup">
              <Button variant="light">Sign up</Button>
            </LinkContainer>
            </div>

        </div>

    );
}

export default Home;
