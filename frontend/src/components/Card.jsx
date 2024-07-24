import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import axios from 'axios';


const GetData = (props) => {
  const [food, setFood] = useState([]);
  const [country, setCountry] = useState([]);
  const [review, setReview] = useState([]);

  const grabFoodData = async () => {
    try {
      const response = await axios.get('/food', {
        food
      });

      console.log(response.data)
      setFood(response.data)
    } catch (error) {
      console.log('error: ', error);
    }
  };

  grabFoodData();

  const grabCountryData = async () => {
    try {
      const response = await axios.get('/country', {
        country
      });
      setCountry(response.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  grabCountryData();

  const grabReviewData = async () => {
    try {
      const response = await axios.get('/review', {
        review
      });
      setReview(response.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  grabReviewData();

return(
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Header>{[props.country]}</Card.Header>
          <Card.Text>Foods: {[props.food]}</Card.Text>
          <Card.Text>Reviews: {[props.review]}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GetData;
