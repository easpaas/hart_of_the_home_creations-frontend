import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './components/Shop/shop.component';
import About from './pages/about/about.component';
import ShoppingCart from './components/ShoppingCart/shopping-cart.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        {/* TODO - private routes that authorized user can see and access CRUD for products and blogs */}
        {/* <SecureRoute path='/admin/blog' component={} /> */}
        {/* <SecureRoute path='/admin/product' component={} /> */}
        {/* <Route path='/blogs' component={Blogs} /> */}
        {/* <Route path='/products' component={Products} /> */}
        <Route path='/about' component={About} />
        <Route exact path="/cart" component={ShoppingCart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
