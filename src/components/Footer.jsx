import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiThreads } from "react-icons/si";


import "./footer.css";

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="site-footer-top">
        <div className="site-footer-links">
          <h2>Useful Links</h2>
          <div className="links-column lfs-1">
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="links-column lfs-2">
            <ul>
              <li><a href="#">Partner</a></li>
              <li><a href="#">Franchise</a></li>
              <li><a href="#">Seller</a></li>
              <li><a href="#">Warehouse</a></li>
              <li><a href="#">Deliver</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div className="links-column lfs-3">
            <ul>
              <li><a href="#">Recipes</a></li>
              <li><a href="#">Bistro</a></li>
              <li><a href="#">District</a></li>
            </ul>
          </div>
        </div>
        <div className="site-footer-categories">
          <h2>Categories</h2>
          <a href="#">see all</a>
          <ul>
            <li><a href="#">Vegetables &amp; Fruits</a></li>
            <li><a href="#">Dairy &amp; Breakfast</a></li>
            <li><a href="#">Munchies</a></li>
            <li><a href="#">Cold Drinks &amp; Juices</a></li>
            <li><a href="#">Instant &amp; Frozen Food</a></li>
            <li><a href="#">Tea, Coffee &amp; Milk Drinks</a></li>
            <li><a href="#">Bakery &amp; Biscuits</a></li>
            <li><a href="#">Sweet Tooth</a></li>
            <li><a href="#">Atta, Rice &amp; Dal</a></li>
            <li><a href="#">Dry Fruits, Masala &amp; Oil</a></li>
            <li><a href="#">Sauces &amp; Spreads</a></li>
            <li><a href="#">Chicken, Meat &amp; Fish</a></li>
            <li><a href="#">Paan Corner</a></li>
            <li><a href="#">Organic &amp; Premium</a></li>
            <li><a href="#">Baby Care</a></li>
            <li><a href="#">Pharma &amp; Wellness</a></li>
            <li><a href="#">Cleaning Essentials</a></li>
            <li><a href="#">Home Furnishing &amp; Decor</a></li>
            <li><a href="#">Personal Care</a></li>
            <li><a href="#">Pet Care</a></li>
            <li><a href="#">Beauty &amp; Cosmetics</a></li>
            <li><a href="#">Magazines</a></li>
            <li><a href="#">Kitchen &amp; Dining</a></li>
            <li><a href="#">Fashion &amp; Accessories</a></li>
            <li><a href="#">Electronics &amp; Electricals</a></li>
            <li><a href="#">Stationery Needs</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Toys &amp; Games</a></li>
            <li><a href="#">Print Store</a></li>
            <li><a href="#">E-Gift Cards</a></li>
            <li><a href="#">Rakhi Gifts</a></li>
          </ul>
        </div>
      </div>
      <div className="site-footer-bottom">
        <div className="site-footer-bottom-top">
          <p className="site-footer-bottom-text">© Blink Commerce Private Limited, 2016-2025, Made by Geetanshu</p>
          <p>Download App</p>
          <img src="https://blinkit.com/d61019073b700ca49d22.png" alt="" />
          <img src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="" />
          <FaFacebook size={24} color="#1877F2" />    
          <FaInstagram size={24} color="#E1306C" />             
          <FaLinkedin size={24} color="#0A66C2" />    
          <FaTwitter size={24} color="#1DA1F2" />     
          <SiThreads size={24} color="#e1306c" />     
           </div>
        <div className="bottom-section">
          <p>“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
