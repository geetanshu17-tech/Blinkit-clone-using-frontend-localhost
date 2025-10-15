import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import "./cart.css";
import { CartStorer } from "../components/helper/CartStorer";

const Cart = () => {
  const { cart, totalItems, totalPrice, clearCart } = useContext(CartStorer);

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h1>Your Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.weight}</p>
                  <p>
                    {item.quantity} × {item.price}
                  </p>
                </div>
              </div>
            ))}

            <div className="bill-section">
              <div className="bill-row">
                <span>Total Items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="bill-row">
                <span>Total Price:</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            <button className="buy-btn" onClick={clearCart}>
              Buy Now
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
