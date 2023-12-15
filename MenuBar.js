// MenuBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    // Add logic here to handle menu item click (e.g., navigate to a different page)
  };

  return (
    <div className="menu-bar">
      <Link to="/" className={`menu-item ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')}>
        Home
      </Link>
      <Link to="/about" className={`menu-item ${activeItem === 'about' ? 'active' : ''}`} onClick={() => handleItemClick('about')}>
        About
      </Link>
      <Link to="/contact" className={`menu-item ${activeItem === 'contact' ? 'active' : ''}`} onClick={() => handleItemClick('contact')}>
        Contact
      </Link>
      {/* Add more menu items as needed */}
    </div>
  );
};

export default MenuBar;
