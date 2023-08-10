import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 50%;
  max-height: 50%;
  transition: transform 300ms;

  &:hover {
    transform: scale(1.2);
  }
`;

const CategorySection = ({ category, productsInfo }) => {
  return (
    <section className='pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto'>
      <h2 className='mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold'>
        {category}
      </h2>
      <div
        className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list'
        data-scroll='true'
      >
        {Object.values(productsInfo).map((product) => (
          <Link
            className='card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal'
            to={`/product/${product.id}`}
            state={{ productInfo: product }}
            key={product.id}
          >
            <figure className='flex h-80 bg-white overflow-hidden'>
              <Image src={product.image} alt='상품 이미지' />
            </figure>
            <div className='card-body bg-gray-100 dark:bg-gray-700'>
              <p className='card-title text-base'>{product.title}</p>
              <p className='text-base'>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
