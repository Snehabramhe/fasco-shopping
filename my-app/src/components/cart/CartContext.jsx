import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wrap, setWrap] = useState(false);

  const addToCart = (item) => {
    // item must have: id, name, image, price, color, size, qty
    setCartItems((prev) => {
      // merge same product variant (id + color + size)
      const idx = prev.findIndex(
        (x) => x.id === item.id && x.color === item.color && x.size === item.size
      );

      if (idx === -1) return [...prev, item];

      const copy = [...prev];
      copy[idx] = { ...copy[idx], qty: copy[idx].qty + item.qty };
      return copy;
    });
  };

  const incQty = (id, color, size) => {
    setCartItems((prev) =>
      prev.map((x) =>
        x.id === id && x.color === color && x.size === size
          ? { ...x, qty: x.qty + 1 }
          : x
      )
    );
  };

  const decQty = (id, color, size) => {
    setCartItems((prev) =>
      prev.map((x) =>
        x.id === id && x.color === color && x.size === size
          ? { ...x, qty: Math.max(1, x.qty - 1) }
          : x
      )
    );
  };

  const removeItem = (id, color, size) => {
    setCartItems((prev) =>
      prev.filter((x) => !(x.id === id && x.color === color && x.size === size))
    );
  };

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      incQty,
      decQty,
      removeItem,
      wrap,
      setWrap,
    }),
    [cartItems, wrap]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}



