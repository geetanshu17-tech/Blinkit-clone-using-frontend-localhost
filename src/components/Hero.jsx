import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="left-section">
          <h1>Sweet Corner</h1>
          <p>Delicious treats delivered to your door is now online</p>
          <button>Order Now</button>
        </div>
        <div className="right-section">
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/937e08a2-3d1a-4ce2-a2ee-616615ae6dbd.png" alt="sweet-item" />
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/c2732ae7-8f2e-4daf-81c1-e2d3ea39a363.png" alt="sweet-item" />
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/37879316-bfa7-46b1-8de5-c93b94723d32.png" alt="sweet-item" />
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/292b76b5-6e33-4761-a262-98ef637cbc4f.png" alt="sweet-item" />
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/7cf3e9c3-24c0-46a8-9e37-328955eda71b.png" alt="sweet-item" />
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/03623ce8-b838-4494-8c50-e6693dc785f2.png" alt="sweet-item" />
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/ed716390-5daf-4581-830c-b8f7e550776c.png" alt="sweet-item" />
        </div>
      </div>
    </>
  );
};

export default Hero;
