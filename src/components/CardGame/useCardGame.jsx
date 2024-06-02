import React, { useContext, useState } from "react";
import { CartContext } from "../../core/context/CartContext";

const useCardGame = () => {
  const [expanded, setExpanded] = useState(false);
  const [setIconChange, setChangeIcon] = useState(true);
  const [count, setCount] = useState(0);

  const { addProduct } = useContext(CartContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handledChangeIcon = () => {
    setChangeIcon(!setIconChange);
  };

  const addItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    if (count === 1) {
      setChangeIcon(!setIconChange);
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const addCarItems = (mapItem, countItems) => {
    // console.log({ mapItem }, { countItems });
    const item = { ...mapItem, quantity: countItems };
    addProduct(item);
  };
  return {
    count,
    addItem,
    setCount,
    expanded,
    removeItem,
    setExpanded,
    addCarItems,
    setIconChange,
    setChangeIcon,
    handleExpandClick,
    handledChangeIcon,
  };
};

export default useCardGame;
