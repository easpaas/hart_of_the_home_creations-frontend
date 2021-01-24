import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';
// import HomePage from './pages/home/homepage.component';
// import AboutPage from './pages/about/about.component';
// import CheckoutPage from './pages/checkout/checkout.component';
// import ShopPage from './pages/shop/shop-page.component';
// import NotFound from './components/NotFound/notfound.component';
import Maintenance from './components/maintenance';

// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { setCurrentUser } from './redux/user/user.actions';
// import { selectCurrentUser } from './redux/user/user.selectors';
// import SignInAndSignUpPage from './pages/signinsignup/sign-in-and-sign-up.component';


class App extends React.Component {
  // unsubscribeFromAuth = null;

  // componentDidMount() {
  //   const { setCurrentUser } = this.props;

  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapShot => {
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data()
  //         });
  //       });
  //     }

  //     setCurrentUser(userAuth);
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/**' component={Maintenance} />
          {/* <Route path='/about' component={AboutPage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route path="/blog" component={NotFound} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
export default App;