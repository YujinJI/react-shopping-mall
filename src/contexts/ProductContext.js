import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext({
  fashionProducts: [],
  accessoryProducts: [],
  digitalProducts: [],
});

export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [fashionProducts, setFashionProducts] = useState([]);
  const [accessoryProducts, setAccessoryProducts] = useState([]);
  const [digitalProducts, setDigitalProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        Object.keys(products).forEach((key) => {
          const product = products[key];
          setAllProducts((prev) => [...prev, product]);
          if (product.category.includes('clothing')) {
            const productInfo = {
              ...product,
              category: '패션',
              price: Math.ceil(product.price),
            };
            setFashionProducts((prev) => [...prev, productInfo]);
          } else if (product.category === 'jewelery') {
            const productInfo = {
              ...product,
              category: '액세서리',
              price: Math.ceil(product.price),
            };
            setAccessoryProducts((prev) => [...prev, productInfo]);
          } else if (product.category === 'electronics') {
            const productInfo = {
              ...product,
              category: '디지털',
              price: Math.ceil(product.price),
            };
            setDigitalProducts((prev) => [...prev, productInfo]);
          }
          setIsLoading(false);
        });
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        fashionProducts,
        accessoryProducts,
        digitalProducts,
        isLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
