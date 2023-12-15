// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuBar from './MenuBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div className="app">
        <MenuBar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
