import React, { Component } from 'react';

class Exercise extends Component {
  getDefaultProps () {
      return {
        title: 'React Homework Generator'
      };
  }

  getInitialState () {

  }

  render() {
    return (
      <div className="Exercise">
        <div className="Exercise-header">
          <h3>Exercise</h3>
        </div>
        <p >
            Exercise
        </p>
      </div>
    );
  }

  onButtonClick (e) {
    e.preventDefault();

  }
}

export default Exercise;
