import React from 'react';
import './needy.css';

const Needy = () => {
  return (
    <div className="needy-container">
      <div className="image-wrapper">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
          alt="pharmacy"
        />
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
          alt="pet-supplies"
        />
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg"
          alt="baby-supplies"
        />
      </div>
    </div>
  );
};

export default Needy;
