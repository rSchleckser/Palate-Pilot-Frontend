import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import '../App.css';
// import PalatePilotCard from './Card';

const Welcome = () => {
  return (
    <div className='home-container'>
      <div className='home-content2'>
        <div className='home-text2'>
          <p>
          Start by adding your favorite foods and exploring new culinary experiences.
          </p>
        </div>
        <div className='button-container'>
          <LinkContainer to='/userfavorites'>
            <Button variant='light' className='me-2'>
              Add favorites
            </Button>
          </LinkContainer>
          <LinkContainer to='/userreviews'>
            <Button variant='light'>Add reviews</Button>
          </LinkContainer>
        </div>
      </div>
      <div>
        {/* <GetData /> */}
      </div>
    </div>
  );
};

export default Welcome;
