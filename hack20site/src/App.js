import React, { Component } from 'react'; 
import Main from "./Main"
import MainContent from "./MainContent";
// Import the user LogIn Page
import UserLogIn from "./userLogIn"
import './App.css';

// Import Firebase
import firebase from 'firebase/app';

class App extends Component {
  render () {
    return (
      <div className="App">
          <Main/>
      </div>
    );
  }
}

export default App;
