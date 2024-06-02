import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item) => {
    try{
        if (isInCart(item)) {
            const newCart = cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
              }
              return cartItem;
            });
            setCart([...newCart]);
          } else {
            setCart([...cart, { ...item }]);
          }
    } catch (error) {
        console.log(error);
    }
  };

  const removeItem = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCart);
  };

  const isInCart = (item) => {
    return cart.some((cartItem) => cartItem.id === item.id);
  };


  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeItem, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
