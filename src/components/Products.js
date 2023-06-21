import React, { useContext } from 'react';
import CategorySection from './CategorySection';
import { ProductContext } from '../contexts/ProductContext';

const Products = (props) => {
  const { fashionProducts, accessoryProducts, digitalProducts, isLoading } =
    useContext(ProductContext);
  console.log(fashionProducts);

  if (isLoading) {
    return (
      <div className='flex justify-center align-center h-40'>
        <span className='loading loading-spinner'></span>
      </div>
    );
  }

  return (
    <>
      <CategorySection
        category={'패션'}
        productsInfo={fashionProducts.slice(0, 4)}
      />
      <CategorySection
        category={'액세서리'}
        productsInfo={accessoryProducts.slice(0, 4)}
      />
      <CategorySection
        category={'디지털'}
        productsInfo={digitalProducts.slice(0, 4)}
      />
    </>
  );
};

export default Products;
