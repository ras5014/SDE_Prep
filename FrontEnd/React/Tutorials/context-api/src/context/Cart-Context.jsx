import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

// Custom hook to write less code
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
