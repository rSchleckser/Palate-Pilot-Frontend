import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';

const Meals = () => {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/food');
        setFoods(response.data.foods);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <Row xs={1} md={2} className='g-4'>
        {foods.map((food) => (
          <Col key={food.id}>
            <Card style={{maxHeight: '500px', maxWidth: '500px', margin: '25px', padding: '25px', alignContent: 'center'}}>
              <Card.Img variant='top' src={food.image} style={{maxHeight: '300px', maxWidth: '300px', marginLeft: '75px'}}/>
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                  <Card.Text>{food.description}</Card.Text>
                  <Card.Text>Recipe Link: {food.recipeLink}</Card.Text>
                  <Card.Text><strong>Country:</strong> {food.country.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default Meals;
