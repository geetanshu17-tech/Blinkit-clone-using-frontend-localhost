import React, { useState, useContext, useEffect } from "react";
import { CartStorer } from "../components/helper/CartStorer";
import "./addToCart.css";

const AddToCartBtn = ({ product }) => {
  const [count, setCount] = useState(0);
  const { cart, addToCart, removeFromCart } = useContext(CartStorer);

  useEffect(() => {
    const foundItem = cart.find((item)=> item.name === product.name);
    if (foundItem) {
      setCount(foundItem.quantity);
    }else{
      setCount(0);
    }
  }, [cart, product.name]);

  const handleAdd = () => {
    addToCart(product);
  };

  const increase = () => {
    addToCart(product);
  };

  const decrease = () => {
    removeFromCart(product.name);
  }
  // const decrease = () => {
  //   if (count > 1) {
  //     setCount((prev) => prev - 1);
  //     removeFromCart(product.name);
  //   } else {
  //     setCount(0);
  //     removeFromCart(product.name);
  //   }
  // };

  return (
    <div className="add-cart-container">
      {count === 0 ? (
        <button className="add-btn" onClick={handleAdd}>
          ADD
        </button>
      ) : (
        <div className="quantity-control">
          <button onClick={decrease}>-</button>
          <span className="qty">{count}</span>
          <button onClick={increase}>+</button>
        </div>
      )}
    </div>
  );
};

export default AddToCartBtn;
