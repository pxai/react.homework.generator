import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormGenerate from './FormGenerate';
import ExerciseGroup from './ExerciseGroup';

var App = React.createClass({
  getDefaultProps: function () {
      return {
        title: 'React Homework Generator'
      };
  },

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React HomeWork Generator</h2>
        </div>
        <FormGenerate />
        <p className="App-intro">
          <ExerciseGroup  />
        </p>
      </div>
    );
  }

});

export default App;
