Install React Router if you haven't already: npm install react-router-dom
============
// MenuBar.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const history = useHistory();

  const handleItemClick = (itemName, route) => {
    setActiveItem(itemName);
    history.push(route);
  };

  return (
    <div className="menu-bar">
      <Link to="/" className={`menu-item ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home', '/')}>
        Home
      </Link>
      <Link to="/about" className={`menu-item ${activeItem === 'about' ? 'active' : ''}`} onClick={() => handleItemClick('about', '/about')}>
        About
      </Link>
      <Link to="/contact" className={`menu-item ${activeItem === 'contact' ? 'active' : ''}`} onClick={() => handleItemClick('contact', '/contact')}>
        Contact
      </Link>
      {/* Add more menu items as needed */}
    </div>
  );
};

export default MenuBar;
