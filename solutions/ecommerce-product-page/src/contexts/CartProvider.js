import { createContext, useState, useContext } from 'react';
import { removeCartItemByName, addItemToCart } from '../utils';

const CartContext = createContext({});

const useCartState = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartState must be used withing CartProvider');
  }

  return context;
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const removeItem = (name) => setCart(removeCartItemByName(cart, name));
  const addItem = (product, qty) => setCart(addItemToCart(cart, product, qty));

  const items = Object.entries(cart).map((i) => ({ ...i[1] }));
  const count = items.reduce((count, item) => item.qty + count, 0);
  const isEmpty = count <= 0;

  return (
    <CartContext.Provider
      value={{ cart, count, isEmpty, items, removeItem, addItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCartState };
