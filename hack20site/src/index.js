import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBrbhlGi66o5ngxGI0gQYdX0OKGMKc6Qvc",
    authDomain: "workout-buddy-fa7c9.firebaseapp.com",
    databaseURL: "https://workout-buddy-fa7c9.firebaseio.com",
    projectId: "workout-buddy-fa7c9",
    storageBucket: "workout-buddy-fa7c9.appspot.com",
    messagingSenderId: "597544238607",
    appId: "1:597544238607:web:2c464524646aca27636d7a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
