import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route path='/shop' component={Shop} />
      <Route path='/about' component={About} />
      <Route exact path="/cart" component={ShoppingCart} />
    </div>
  );
}

export default App;
