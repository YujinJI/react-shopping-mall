import React, { useContext, useEffect, useState } from 'react';
import { clearCart, getCartItems } from '../utils/localStorageUtils';
import { ProductContext } from '../contexts/ProductContext';
import CartModal from './CartModal';
import CartItem from './CartItem';

const Cart = (props) => {
  const { allProducts } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState(getCartItems());
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemsInfo, setCartItemsInfo] = useState([]);

  useEffect(() => {
    for (const product in allProducts) {
      const id = allProducts[product].id;
      if (cartItems[id]) {
        setCartItemsInfo((prev) => [...prev, allProducts[product]]);
      }
    }
  }, [allProducts, cartItems]);

  const handlePriceUpdate = (price) => {
    setTotalPrice((prev) => prev + price);
  };

  const handleClearCart = () => {
    // 장바구니를 비우면 모두 초기화해주기.
    clearCart();
    setCartItems({});
    setTotalPrice(0);
    setCartItemsInfo([]);
  };

  console.log('카트에 담은 상품 id', cartItems);
  console.log('모든 상품 리스트', allProducts);
  console.log('카트에 담은 상품들의 상세정보', cartItemsInfo);

  return (
    <section className='pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:containermx-auto'>
      <div className='text-sm breadcrumbs'>
        <ul>
          <li>홈</li>
          <li>장바구니</li>
        </ul>
      </div>
      <div className='mt-6 md:mt-14 px-2 lg:px-0'>
        {Object.keys(cartItems).length === 0 && (
          <div>
            <h1 className='text-2xl'>장바구니에 물품이 없습니다.</h1>
            <a className='btn btn-primary mt-10' href='/'>
              담으러 가기
            </a>
          </div>
        )}
        <div className='lg:flex justify-between mb-20'>
          <div>
            {cartItemsInfo.length > 0 &&
              Object.keys(cartItemsInfo).map((key) => {
                const cartItem = cartItemsInfo[key];
                if (cartItems[cartItem.id]) {
                  return (
                    <CartItem
                      key={key}
                      cartItem={cartItem}
                      count={cartItems[cartItem.id].count}
                      onPriceUpdate={handlePriceUpdate}
                    />
                  );
                } else return <></>;
              })}
          </div>
          <div className='self-start shrink-0 flex items-center mt-10 mb-20'>
            <span className='text-xl md:text-2xl'>총 : ${totalPrice}</span>
            <label
              htmlFor='confirm-modal'
              className='modal-button btn btn-primary ml-5'
            >
              구매하기
            </label>
          </div>
        </div>
      </div>
      <CartModal onClearCart={handleClearCart} />
    </section>
  );
};

export default Cart;
