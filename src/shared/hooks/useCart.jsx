import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Provider
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Number(qty) } : item
      )
    );
  };

  // Total price
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook to consume context
export const useCart = () => useContext(CartContext);
