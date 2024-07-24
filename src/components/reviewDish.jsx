// src/components/ReviewDish.jsx
import React, { useState } from 'react';
import CreateReview from './createReview';
import ReadReviews from './readReviews';
import UpdateReview from './updateReview';
import DeleteReview from './deleteReview';

const ReviewDish = () => {
  const [reviews, setReviews] = useState([
    { id: 1, dishName: "Butter Chicken", review: "Delicious and flavorful!" },
    { id: 2, dishName: "Peking Duck", review: "Crispy and flavorful!" },
    { id: 3, dishName: "Sushi", review: "Fresh and exquisite!" }
  ]);
  const [reviewToEdit, setReviewToEdit] = useState(null);

  const addReview = (newReview) => {
    setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
  };

  const updateReview = (id, updatedReview) => {
    setReviews(reviews.map((review) => (review.id === id ? { id, ...updatedReview } : review)));
    setReviewToEdit(null);
  };

  const deleteReview = (index) => {
    setReviews(reviews.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <CreateReview addReview={addReview} />
      <ReadReviews reviews={reviews} />
      {reviewToEdit && <UpdateReview reviewToEdit={reviewToEdit} updateReview={updateReview} />}
      <DeleteReview reviews={reviews} deleteReview={deleteReview} />
    </div>
  );
};

export default ReviewDish;

