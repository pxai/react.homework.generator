import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormGenerate from './FormGenerate';
import ExerciseGroup from './ExerciseGroup';

var App = React.createClass({
  getDefaultProps: function () {
      return {
        title: 'React Homework Generator',
        name: 'June'
      };
  },
  // State can be changed
  getInitialState: function () {
    return {
        title: 'React Homework Generator',
        name: 'June'
    };
  },
  handleNewName: function (name) { // Called from the child component
      this.setState({
            name : name
      });
      console.log('Called from child: ' + name);
  },
  render: function () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React HomeWork Generator {this.state.name}</h2>
        </div>
        <FormGenerate onNewName={this.handleNewName}/>
        <p className="App-intro">
        <ExerciseGroup  />
        </p>
      </div>
    );
  }

});

export default App;
