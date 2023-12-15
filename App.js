// App.js
import React from 'react';
import MenuBar from './MenuBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <div className="app">
      <MenuBar />
      <Home />
      {/* Add other components/content here */}
    </div>
  );
};

export default App;
