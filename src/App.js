import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Exercise from './Exercise';

class App extends Component {
  getDefaultProps () {
      return {
        title: 'React Homework Generator'
      };
  }

  getInitialState () {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React HomeWork Generator</h2>
        </div>
        <p className="App-intro">
          <Exercise />
        </p>
      </div>
    );
  }

  onButtonClick (e) {
    e.preventDefault();

  }
}

export default App;
