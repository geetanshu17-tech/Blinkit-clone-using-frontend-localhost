import React, { createContext, useState } from "react";

export const CartStorer = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (!item) return; // Safety check

    const existingItem = cart.find((i) => i.name === item.name);

    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemName) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.name === itemName ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, i) => sum + (i.quantity || 0), 0);

  const totalPrice = cart.reduce((sum, i) => {
    const priceValue = parseInt(i.price?.replace("₹", "")) || 0;
    return sum + (i.quantity || 0) * priceValue;
  }, 0);

  return (
    <CartStorer.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartStorer.Provider>
  );
};
