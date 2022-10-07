import { createContext, useState, useContext } from 'react';
import { PRODUCT } from '../constants';
import { removeCartItemByName } from '../utils';

const CartContext = createContext({});

let dollarUSLocale = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const useCartState = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartState must be used withing CartProvider');
  }

  return context;
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    [`${PRODUCT.name}`]: {
      ...PRODUCT,
      price: dollarUSLocale.format(PRODUCT.price),
      total: dollarUSLocale.format(375),
      qty: 3,
    },
  });

  const removeItem = (name) => setCart(removeCartItemByName(cart, name));

  const items = Object.entries(cart).map((i) => ({ ...i[1] }));
  const count = items.reduce((count, item) => item.qty + count, 0);
  const isEmpty = count <= 0;

  return (
    <CartContext.Provider value={{ cart, count, isEmpty, items, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCartState };
