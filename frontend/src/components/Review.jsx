// src/components/Reviews.jsx
import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <h3>{review.dishName}</h3>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
