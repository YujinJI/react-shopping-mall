import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { addToCart } from '../utils/localStorageUtils';
import StarRating from './StarRating';

const Detail = ({ props }) => {
  const location = useLocation();
  const productInfo = location.state.productInfo;
  console.log(productInfo);

  const clickAddToCart = () => {
    addToCart(productInfo);
  };

  return (
    <>
      <section className='pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto'>
        <div>
          <div className='text-sm breadcrumbs'>
            <ul>
              <li>{productInfo.category}</li>
              <li>{productInfo.title}</li>
            </ul>
          </div>
          <div className='lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0'>
            <figure className='flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image'>
              <img
                src={productInfo.image}
                alt={productInfo.title}
                className='object-contain w-full h-72'
              />
            </figure>
            <div className='card-body px-1 lg:px-12'>
              <Link
                to={`./product/${productInfo.id}`}
                state={{ productInfo: productInfo }}
                key={productInfo.id}
              >
                <h2 className='card-title'>
                  {productInfo.title}
                  <span className='badge badge-accent ml-2'>NEW</span>
                </h2>
              </Link>
              <p>{productInfo.description}</p>
              <div className='flex items-center mt-3'>
                <StarRating rating={productInfo.rating.rate} />
                <div className='ml-2'>
                  {productInfo.rating.rate} / {productInfo.rating.count} 참여
                </div>
              </div>
              <p className='mt-2 mb-4 text-3xl'>${productInfo.price}</p>
              <div className='card-actions'>
                <button className='btn btn-primary' onClick={clickAddToCart}>
                  장바구니에 담기
                </button>
                <a className='btn btn-outline ml-1' href='./cart'>
                  장바구니로 이동
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
