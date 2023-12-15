// MenuBar.js
import React, { useState } from 'react';

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    // Add logic here to handle menu item click (e.g., navigate to a different page)
  };

  return (
    <div className="menu-bar">
      <div
        className={`menu-item ${activeItem === 'home' ? 'active' : ''}`}
        onClick={() => handleItemClick('home')}
      >
        Home
      </div>
      <div
        className={`menu-item ${activeItem === 'about' ? 'active' : ''}`}
        onClick={() => handleItemClick('about')}
      >
        About
      </div>
      <div
        className={`menu-item ${activeItem === 'contact' ? 'active' : ''}`}
        onClick={() => handleItemClick('contact')}
      >
        Contact
      </div>
      {/* Add more menu items as needed */}
    </div>
  );
};

export default MenuBar;
