import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./App.css";
import Landing from './Components/Pages/Landing';
import Store from './Components/Pages/Store';
import Navbar from './Components/Navbar';
import Wrapper from './Components/Wrapper';
import ProductPage from './Components/Pages/SingleProductPage';
class App extends Component {

  userAuth = () => {
    //doStuff
    //this is for checking if user cookie/session is still active 
    //pass this as a prop to other pages to authenticate cookie/session
  }

  render() {
    return (
        <Router>
          <Wrapper>
            <Navbar/>
            <Switch>
              <Route exact path = '/' component = {Landing}/>
              <Route path = '/shop' component = {Store}/>
              <Route path ='/product' component={ProductPage} />
            </Switch>
          </Wrapper>
        </Router>
    );
  }
}

export default App;
