import { createContext, useState } from "react";

// ✅ Create Context
export const CartContext = createContext();

// ✅ Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ Add to Cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};