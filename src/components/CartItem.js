import React, { useEffect, useState } from 'react';
import { decreaseCartItem, increaseCartItem } from '../utils/localStorageUtils';

const CartItem = ({ cartItem, count, onPriceUpdate }) => {
  console.log(cartItem);
  cartItem.price = Math.ceil(cartItem.price);
  const [itemCount, setItemCount] = useState(count);
  const [itemPrice, setItemPrice] = useState(cartItem.price * itemCount);

  useEffect(() => {
    onPriceUpdate(cartItem.price * count);
  }, []);

  const clickDecreaseBtn = () => {
    setItemCount(decreaseCartItem(cartItem.id));
    onPriceUpdate(-cartItem.price);
  };

  const clickIncreaseBtn = () => {
    setItemCount(increaseCartItem(cartItem.id));
    onPriceUpdate(cartItem.price);
  };

  useEffect(() => {
    setItemPrice(cartItem.price * itemCount);
  }, [itemCount]);

  return (
    <div className='lg:flex lg:items-center mt-4 px-2 lg:px-0'>
      {itemCount > 0 && (
        <>
          <a href={`./product/${cartItem.id}`}>
            <figure className='w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white'>
              <img
                src={cartItem.image}
                alt={cartItem.image}
                className='object-contain w-full h-48'
              />
            </figure>
          </a>
          <div className='card-body px-1 lg:px-12'>
            <h2 className='card-title'>
              <a className='link link-hover' href={`./product/${cartItem.id}`}>
                {cartItem.title}
              </a>
            </h2>
            <p className='mt-2 mb-4 text-3xl'>${itemPrice}</p>
            <div className='card-actions'>
              <div className='btn-group'>
                <button className='btn btn-primary' onClick={clickDecreaseBtn}>
                  -
                </button>
                <button className='btn btn-ghost no-animation'>
                  {itemCount}
                </button>
                <button className='btn btn-primary' onClick={clickIncreaseBtn}>
                  +
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
