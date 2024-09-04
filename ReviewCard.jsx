import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
  if (!review || typeof review !== 'object') {
    console.error('Invalid review object:', review);
    return null; // Render nothing if the review object is invalid
  }

  const { title, content, rating, author } = review;

  return (
    <div className="review-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <p><strong>Rating:</strong> {rating} / 5</p>
      <p><strong>By:</strong> {author}</p>
    </div>
  );
};

export default ReviewCard;
