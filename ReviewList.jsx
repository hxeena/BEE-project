import React from 'react';
import ReviewCard from './ReviewCard';
import './ReviewList.css';

const ReviewList = ({ reviews = [] }) => {
  if (!Array.isArray(reviews)) {
    console.error('Expected reviews to be an array but got:', reviews);
    return <p>Something went wrong. No reviews to display.</p>;
  }

  return (
    <div className="review-list">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))
      ) : (
        <p>No reviews yet. Be the first to leave a review!</p>
      )}
    </div>
  );
};

export default ReviewList;
