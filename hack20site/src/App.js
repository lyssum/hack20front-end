import React from 'react';
import Layout from "./Containers/Layout/Layout"
import Cards from "./Components/Cards/Cards";
// Import the user LogIn Page
import UserLogIn from "./userLogIn"
import './App.css';

// Import Firebase
import firebase from 'firebase/app';

function App() {
  return (
    <div className="App">
      <Layout>
        <Cards/>
        <UserLogIn/>
      </Layout>
    </div>
  );
}

export default App;
