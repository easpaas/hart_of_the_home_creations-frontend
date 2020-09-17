import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/shop' component={Shop} />
      {/* TODO - private routes that authorized user can see and access CRUD for products and blogs */}
      {/* <SecureRoute path='/admin/blog' component={} /> */}
      {/* <SecureRoute path='/admin/product' component={} /> */}
      {/* <Route path='/blogs' component={Blogs} /> */}
      {/* <Route path='/products' component={Products} /> */}
      
      <Route path='/about' component={About} />
      <Route exact path="/cart" component={ShoppingCart} />
    </Switch>
    </div>
  );
}

export default App;
