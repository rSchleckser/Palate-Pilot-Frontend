// src/components/CreateReview.jsx
import React, { useState } from 'react';

const CreateReview = ({ addReview }) => {
  const [dishName, setDishName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ dishName, review });
    setDishName('');
    setReview('');
  };

  return (
    <div className="container mt-4">
      <h2>Create Review for Dish</h2>
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateReview;
