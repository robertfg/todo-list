import React, { Component } from 'react';
import './App.css';

import MyInfo from "./components/MyInfo.js";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <MyInfo />
        <Footer />
      </div>
    );
  }
}

export default App;
