import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Color Box
        </h1>
        <div class = 'box'></div>
        <input class = 'picker' type="color"/>
      </div>
    );
  }
}

export default App;
