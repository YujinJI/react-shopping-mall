// 장바구니에 상품 추가
export const addToCart = (productInfo) => {
  const existingItems = localStorage.getItem('CART_ITEM');
  if (existingItems) {
    const cartItems = JSON.parse(existingItems);
    if (cartItems[productInfo.id]) {
      // 이미 상품이 있는 경우 count 증가
      cartItems[productInfo.id].count += 1;
    } else {
      // 새로운 상품인 경우 count를 1로 설정
      cartItems[productInfo.id] = { id: productInfo.id, count: 1 };
    }
    localStorage.setItem('CART_ITEM', JSON.stringify(cartItems));
  } else {
    const cartItems = { [productInfo.id]: { id: productInfo.id, count: 1 } };
    localStorage.setItem('CART_ITEM', JSON.stringify(cartItems));
  }
};

// 장바구니에서 상품 개수 증가
export const increaseCartItem = (productId) => {
  const existingCartItems = localStorage.getItem('CART_ITEM');
  if (existingCartItems) {
    const cartItems = JSON.parse(existingCartItems);
    if (cartItems[productId]) {
      cartItems[productId].count += 1;
      localStorage.setItem('CART_ITEM', JSON.stringify(cartItems));
      return cartItems[productId].count;
    }
  }
};

// 장바구니에서 상품 개수 감소
export const decreaseCartItem = (productId) => {
  const existingCartItems = localStorage.getItem('CART_ITEM');
  if (existingCartItems) {
    const cartItems = JSON.parse(existingCartItems);
    if (cartItems[productId]) {
      if (cartItems[productId].count > 1) {
        cartItems[productId].count -= 1;
        localStorage.setItem('CART_ITEM', JSON.stringify(cartItems));
        return cartItems[productId].count;
      } else {
        // 상품 개수가 1이면 상품 제거
        delete cartItems[productId];
        localStorage.setItem('CART_ITEM', JSON.stringify(cartItems));
        return 0;
      }
    }
  }
};

// 장바구니에서 상품 제거
export const removeFromCart = (productId) => {
  const existingCartItems = localStorage.getItem('CART_ITEM');
  if (existingCartItems) {
    const cartItems = JSON.parse(existingCartItems);
    if (cartItems[productId]) {
      delete cartItems[productId];
      localStorage.setItem('CART_IITEM', JSON.stringify(cartItems));
    }
  }
};

// 장바구니의 모든 상품 가져오기
export const getCartItems = () => {
  const existingCartItems = localStorage.getItem('CART_ITEM');
  return existingCartItems ? JSON.parse(existingCartItems) : {};
};

// 장바구니의 모든 상품 개수 가져오기
export const getCartCount = () => {
  const existingCartItems = localStorage.getItem('CART_ITEM');
  if (existingCartItems) {
    const cartItems = JSON.parse(existingCartItems);
    let totalCount = 0;
    Object.keys(cartItems).forEach((item) => {
      totalCount += cartItems[item].count;
    });
    console.log(totalCount);
    return totalCount;
  }
  return 0;
};

// 장바구니의 모든 상품을 지우는 함수
export const clearCart = () => {
  localStorage.removeItem('CART_ITEM');
};
