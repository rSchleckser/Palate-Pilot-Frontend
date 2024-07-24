import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import axios from 'axios';

const GetData = () => {
  const [food, setFood] = useState([]);
  const [country, setCountry] = useState([]);
  const [review, setReview] = useState([]);

  const grabFoodData = async () => {
    try {
      const response = await axios.get('/food', {
        food,
      });
      setFood(response.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const grabCountryData = async () => {
    try {
      const response = await axios.get('/country', {
        country,
      });
      setCountry(response.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const grabReviewData = async () => {
    try {
      const response = await axios.get('/review', {
        review,
      });
      setReview(response.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Header>{grabCountryData([])}</Card.Header>
          <Card.Text>Foods: {grabFoodData([])}</Card.Text>
          <Card.Text>Reviews: {grabReviewData([])}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default GetData;
