// src/components/ReadReviews.jsx
import React from 'react';

const ReadReviews = ({ reviews }) => {

  useEffect(() => {
    axios.get('http://localhost:3000/readReviews')
    .then(res => {
        ReadReviews(res.data);
    })
    .catch(err => {
        console.log('error: ', err);
    })
});
  return (
    <div className="container mt-4">
      <h2>Reviews</h2>
      <div className="list-group">
        {reviews.map((review, index) => (
          <div key={index} className="list-group-item">
            <h5 className="mb-1">{review.dishName}</h5>
            <p className="mb-1">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadReviews;
