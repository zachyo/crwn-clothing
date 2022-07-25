import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop-page.component";
import Checkout from "./pages/checkout/checkout.component";
import SignInandSignUpPage from "./pages/signin&signup/signinandsignup.component";
import Header from "./components/header/header.component";
import {
  auth,
  createUserProfileDoc,
} from "./components/firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import CollectionPage from "./pages/collection/collection.component";
import NotFound from "./components/notFound/notFound";
import Contact from "./pages/contact/contact.component";

class App extends React.Component {
  // constructor() {
  //   super();

  // };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDoc(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          // console.log(this.state);
        });
      }
      setCurrentUser(user);
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:routeName" element={<CollectionPage />} />
          <Route path="/signin" element={<SignInandSignUpPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  // collectionsArray : selectCollectionsForPreview(state.shop.collections)
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
