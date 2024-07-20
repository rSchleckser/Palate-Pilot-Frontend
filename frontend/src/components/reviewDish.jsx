// src/components/ReviewPage.jsx
import React from 'react';
import Reviews from './Review';

const ReviewPage = () => {
  const reviews = [
    { dishName: "Butter Chicken", review: "Delicious and flavorful!" },
    { dishName: "Peking Duck", review: "Crispy and flavorful!" },
    { dishName: "Sushi", review: "Fresh and exquisite!" },
  ];

  return (
    <div>
      <h2>Reviews of the different dishes</h2>
      <Reviews reviews={reviews} />
    </div>
  );
};

export default ReviewPage;
