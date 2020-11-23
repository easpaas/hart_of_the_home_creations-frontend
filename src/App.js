import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import ShoppingCart from './components/ShoppingCart/shopping-cart.component';
import Shop from './pages/shop/shop-page.component';
import NotFound from './components/NotFound/notfound.component';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={About} />
        <Route path='/shop' component={Shop} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route path="/*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
