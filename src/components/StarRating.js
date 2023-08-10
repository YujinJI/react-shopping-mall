import React, { useState } from 'react';

const StarRating = ({ rating }) => {
  console.log(rating);
  const [starRating, setStarRating] = useState(rating);

  const handleRatingChange = (newRating) => {
    setStarRating(newRating);
  };

  const renderRating = () => {
    const ratingInputs = [
      <input key={0} type='radio' name='rating-10' className='rating-hidden' />,
    ];
    for (let i = 0; i < 10; i++) {
      const isChecked = i <= Math.floor(starRating * 2 - 1);
      // const isChecked = i < Math.round(starRating);
      console.log(`i = ${i} isChecked = ${isChecked}`);
      ratingInputs.push(
        <input
          key={i + 1}
          type='radio'
          name='rating-10'
          className={`bg-yellow-400 cursor-default mask mask-star-2 mask-half-${
            i % 2 === 0 ? '1' : '2'
          }`}
          checked={isChecked ? 'checked' : ''}
          onChange={handleRatingChange}
          disabled
        />
      );
    }
    return ratingInputs;
  };

  return <div className='rating rating-lg rating-half'>{renderRating()}</div>;
};

export default StarRating;
