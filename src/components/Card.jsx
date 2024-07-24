// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Meals = () => {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);

<<<<<<< HEAD:frontend/src/components/Card.jsx
    const fetchData = async () => {
      try {
        await axios.get('/food').then (res => {
          console.log(res);
          setFoods([res.data]) 
        });
        
      } catch (error) {
        setError(error);
      }
    };
    useEffect(() => {

    fetchData();
  }, []);


  if (error) return <p>Error: {error}</p>;

  return (

    !foods ? error :
        <>
            <div>
              <h1>Food List</h1>
              <ul>
                {
                    foods.map((food) => (
                      <li key={food}>
                        <h2>{food.name}</h2>
                        <p>{food.description}</p>
                        <p><strong>Country:</strong>{food.country}</p>
                      </li>
                    ))
                }
              </ul>
            </div>
        </>

  );
=======
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
>>>>>>> f6146358925574e8c88e8b7f41e7b3532f74355e:src/components/Card.jsx

};

export default Meals;