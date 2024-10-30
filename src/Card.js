import React from 'react';
import './Card.css'; // Create this for any specific styles you want

const Card = ({ value, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      {isFlipped ? value : '?'}
    </div>
  );
};

export default Card;