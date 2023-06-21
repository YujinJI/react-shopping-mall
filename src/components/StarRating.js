import React, { useState } from 'react';

const StarRating = ({ rating }) => {
  const [starRating, setStarRating] = useState(rating);

  const handleRatingChange = (newRating) => {
    setStarRating(newRating);
  };

  const renderRating = () => {
    const ratingInputs = [
      <input key={0} type='radio' name='rating-7' className='rating-hidden' />,
    ];
    for (let i = 0; i < 10; i++) {
      const isChecked = i <= starRating * 2 - 1;
      ratingInputs.push(
        <input
          key={i + 1}
          type='radio'
          name='rating-7'
          className={`bg-yellow-500 mask mask-star-2 mask-half-${
            i % 2 === 0 ? '1' : '2'
          }`}
          checked={isChecked ? 'checked' : ''}
          onChange={handleRatingChange}
        />
      );
    }
    return ratingInputs;
  };

  return <div className='rating rating-md rating-half'>{renderRating()}</div>;
};

export default StarRating;
