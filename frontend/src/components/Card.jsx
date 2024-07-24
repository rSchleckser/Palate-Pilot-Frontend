import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import axios from 'axios';


const GetData = (props) => {
  const [food, setFood] = useState([]);
  const [country, setCountry] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    const grabFoodData = async () => {
      try {
        const response = await axios.get('/api/food');
        setFood(response.data);
      } catch (error) {
        console.log('error: ', error);
      }
    };

    const grabCountryData = async () => {
      try {
        const response = await axios.get('/api/country');
        setCountry(response.data);
      } catch (error) {
        console.log('error: ', error);
      }
    };

    const grabReviewData = async () => {
      try {
        const response = await axios.get('/api/review');
        setReview(response.data);
      } catch (error) {
        console.log('error: ', error);
      }
    };

    grabFoodData();
    grabCountryData();
    grabReviewData();
  }, []);
return(
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Header>{country}</Card.Header>
          <Card.Text>Foods: {food}</Card.Text>
          <Card.Text>Reviews: {review}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GetData;
