// src/components/updateReview.jsx
import React, { useState } from 'react';

const UpdateReview = ({ reviewToEdit, updateReview }) => {
  const [dishName, setDishName] = useState(reviewToEdit.dishName);
  const [review, setReview] = useState(reviewToEdit.review);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateReview(reviewToEdit.id, { dishName, review });
  };

  return (
    <div className="container mt-4">
      <h2>Update Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="dishName" className="form-label">Dish Name</label>
          <input
            type="text"
            className="form-control"
            id="dishName"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="review" className="form-label">Review</label>
          <textarea
            className="form-control"
            id="review"
            rows="3"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateReview;
