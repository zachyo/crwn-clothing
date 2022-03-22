import React from 'react'
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop-page.component";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import SignIn from "./components/signin/signin.component";
import {auth} from "./components/firebase/firebase.utils";

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})
    console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    const {currentUser} = this.state
    console.log(currentUser);

    return (
      <div>
        <Header currentUser={currentUser}/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    );
  }
  
}

export default App;
