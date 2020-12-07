import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';
import HomePage from './pages/home/homepage.component';
import AboutPage from './pages/about/about.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ShopPage from './pages/shop/shop-page.component';
import NotFound from './components/NotFound/notfound.component';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/blog" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
