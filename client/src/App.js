import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./App.css";
import Landing from './Components/Pages/Landing';

class App extends Component {

  userAuth = () => {
    //doStuff
    //this is for checking if user cookie/session is still active 
    //pass this as a prop to other pages to authenticate cookie/session
  }

  render() {
    return (
        <Router>
          <Route exact path = '/' component = {Landing}/>
          
        </Router>
    );
  }
}

export default App;
