import { Card, Button, ListGroup, Container, Row, Col } from 'react-bootstrap';

const ProfilePage = (props) => {
  return (
    <Container className='d-flex justify-content-center mt-5'>
      <Card style={{ backgroundColor: '#F8F9FA', width: '50%' }}>
        <Card.Body>
          <Row className='text-center mb-4'>
            <Col>
              <img
                src='https://avatar.iran.liara.run/public'
                alt='Profile'
                className='rounded-circle mb-3'
                style={{ width: '150px', height: '150px' }}
              />
              <h3>{props.username}</h3>
            </Col>
          </Row>

          <Row className='mb-4'>
            <Col>
              <h5>Favorites</h5>
              <ListGroup variant='flush'>
                {props.favorites.map((favorite, index) => (
                  <ListGroup.Item key={index}>{favorite}</ListGroup.Item>
                ))}
              </ListGroup>
              <Button variant='primary' className='mt-3' href='/userfavorites'>
                View All Favorites
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5>Reviews</h5>
              <ListGroup variant='flush'>
                {props.reviews.map((review, index) => (
                  <ListGroup.Item key={index}>{review}</ListGroup.Item>
                ))}
              </ListGroup>
              <Button variant='primary' className='mt-3' href='/userreviews'>
                View All Reviews
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfilePage;
