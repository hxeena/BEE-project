import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import './ReviewsPage.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    if (review && review.title && review.content && review.rating && review.author) {
      setReviews((prevReviews) => [...prevReviews, review]);
    } else {
      console.error('Attempted to add an invalid review:', review);
    }
  };

  return (
    <div className="reviews-page">
      <h1>Customer Reviews</h1>
      <ReviewForm onAddReview={addReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ReviewsPage;
