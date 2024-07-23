import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

const Home = () => {

    return (
        <div>
            <h1>Welcome to Palate Pilot!</h1>
            {/* <Favorites />
            <Card /> */}
            <h5>Palate-Pilot is a web application that allows users to explore different countries and their popular foods. Users can create accounts to add their favorite foods, each with an image, description, and other relevant information. This app aims to provide a comprehensive platform for food enthusiasts to discover, share, and learn about culinary delights from around the world.</h5>
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
