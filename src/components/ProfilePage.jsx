import { useState, useEffect } from 'react';
import { Container, Card, Row, Col, ListGroup, Button } from 'react-bootstrap';

import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          'http://localhost:3000/profile/profile',
          {
            headers: { 'x-auth-token': token },
          }
        );
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

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
              <h3>{user.username}</h3>
            </Col>
          </Row>

          <Row className='mb-4'>
            <Col>
              <h5>Favorites</h5>
              <ListGroup variant='flush'>
                {user.favorite_foods.map((favorite, index) => (
                  <ListGroup.Item key={index}>
                    {favorite.food} - {favorite.description}
                  </ListGroup.Item>
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
                {user.reviews.map((review, index) => (
                  <ListGroup.Item key={index}>
                    {review.reviewText}
                    <div className='text-muted'>
                      Rating: {review.rating} / 5
                    </div>
                  </ListGroup.Item>
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
