import { createContext, useState } from "react";
import useTostifyMessage from "../../components/SnackBar/SnackBarComponent";
import { ToastContainer } from "react-toastify";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { handleNotification } = useTostifyMessage();
  const [cart, setCart] = useState([]);

  const addProduct = (item) => {
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
  };

  const removeItem = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCart);
  };

  const isInCart = (item) => {
    return cart.some((cartItem) => cartItem.id === item.id);
  };

  //calcular el total de los proiductos e imprimirlo por un console.log
  const calculateSubtotal = () => {
    const total = cart.reduce((acc, item) => {
      return acc + item.plat * item.quantity;
    }, 0);

    return total;
  };

  return (
    <>
      <CartContext.Provider
        value={{ cart, addProduct, removeItem, isInCart, calculateSubtotal }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export { CartContext, CartProvider };
