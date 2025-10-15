import React, { useContext } from "react";
import "./navbar.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartStorer } from "../components/helper/CartStorer"; // Importing your cart context

const Navbar = () => {
  const { totalItems, totalPrice } = useContext(CartStorer);

  return (
    <div className="navbar">
      <div className="nav-section logo-section">
        <Link to="/">
          <div className="logo">
            <h1 className="blink">blink</h1>
            <h1 className="it">it</h1>
          </div>
        </Link>
      </div>

      <div className="nav-section delivery-section">
        <h3>
          <b>Delivery in 21 minutes</b>
        </h3>
        <p>Your address.....</p>
      </div>

      <div className="nav-section search-section">
        <FaSearch className="icon" />
        <input
          type="text"
          placeholder="Search for products...."
          className="search"
        />
      </div>

      <div className="nav-section login-section">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>

      <div className="nav-section cart-section">
        <Link to="/cart">
          <button className={totalItems > 0 ? "cart-btn active" : "cart-btn"}>
            <div className="cart-content">
              <FaShoppingCart className="cart-icon" />

              {totalItems > 0 ? (
                <div className="cart-info">
                  <span>
                    {totalItems} item{totalItems > 1 ? "s" : ""}
                  </span>
                  <span>₹{totalPrice}</span>
                </div>
              ) : (
                <span>Cart</span>
              )}
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
