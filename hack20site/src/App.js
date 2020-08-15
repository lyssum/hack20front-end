import React from 'react';
import Layout from "./Containers/Layout/Layout"
import Cards from "./Components/Cards/Cards";
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Cards/>
      </Layout>
    </div>
  );
}

export default App;
