import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import axios from 'axios';

const GetData = () => {
  const [food, setFood] = useState([]);
  const [country, setCountry] = useState([]);
  const [review, setReview] = useState([]);

<<<<<<< HEAD
  const grabFoodData = async () => {
    try {
      const response = await axios.get('/food', {
        food,
      });
      setFood(response.data);
=======
const GetData = (props) => {
  const [food, setFood] = useState([]);
  const [country, setCountry] = useState([]);
  const [review, setReview] = useState([]);

  const grabFoodData = async () => {
    try {
      const response = await axios.get('/api', {
        food
      });

      console.log(response.data)
      setFood(response.data)
>>>>>>> d3573a8acd35514bb143f33f729f24b5ac480e71
    } catch (error) {
      console.log('error: ', error);
    }
  };

<<<<<<< HEAD
  const grabCountryData = async () => {
    try {
      const response = await axios.get('/country', {
        country,
=======
  grabFoodData();

  const grabCountryData = async () => {
    try {
      const response = await axios.get('/country', {
        country
>>>>>>> d3573a8acd35514bb143f33f729f24b5ac480e71
      });
      setCountry(response.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

<<<<<<< HEAD
  const grabReviewData = async () => {
    try {
      const response = await axios.get('/review', {
        review,
=======
  grabCountryData();

  const grabReviewData = async () => {
    try {
      const response = await axios.get('/review', {
        review
>>>>>>> d3573a8acd35514bb143f33f729f24b5ac480e71
      });
      setReview(response.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };
<<<<<<< HEAD

  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Header>{grabCountryData([])}</Card.Header>
          <Card.Text>Foods: {grabFoodData([])}</Card.Text>
          <Card.Text>Reviews: {grabReviewData([])}</Card.Text>
=======
  grabReviewData();

return(
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Header>{[props.country]}</Card.Header>
          <Card.Text>Foods: {[props.food]}</Card.Text>
          <Card.Text>Reviews: {[props.review]}</Card.Text>
>>>>>>> d3573a8acd35514bb143f33f729f24b5ac480e71
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GetData;
