import  { useContext } from "react";
import { CartContext } from "../../core/context/CartContext";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
const useCarPage = () => {
  const [discountCode, setDiscountCode] = useState("");
  const { cart, calculateSubtotal, addProduct, removeItem } =
    useContext(CartContext);

  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value);
  };

  const calculateDiscount = () => {
    if (discountCode === "10OFF") {
      return calculateTotal() * 0.3;
    }
    return 0;
  };

  const handleRemoveFromCart = (product) => {
    removeItem(product);
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount();
  };


  const { categorysList: dataCategorys } = useLoaderData();

  //state
  const [dataCategorysList, ] = useState(dataCategorys);

  function getRandomProducts( products, count ) {
    const productsCopy = [...products];
    const randomProducts = [];
    
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * productsCopy.length);
      randomProducts.push(productsCopy.splice(randomIndex, 1)[0]);
    }
  
    return randomProducts;
  }
  const randomProducts = getRandomProducts(dataCategorysList, 5);
  return {
    cart,
    calculateSubtotal,
    addProduct,
    discountCode,
    setDiscountCode,
    handleDiscountCodeChange,
    calculateDiscount,
    handleRemoveFromCart,
    calculateTotal,
    dataCategorysList,
    randomProducts
  };
};

export default useCarPage;
