import React from 'react';

var Exercise = React.createClass( {
  getDefaultProps: function () {
      return {
        title: 'React Homework Generator',
        operator: '+'
      };
  },

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className="Exercise">
        <div className="Exercise-header">
        </div>
        <div className="result">
            {this.randomNumber(1,20)} {this.props.operator} {this.randomNumber(1,20)} = 
        </div>
      </div>
    );
  },
  randomNumber: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  randomOperator: function () {
    var operators = ['+','-','x'];
    return operators[this.randomNumber(0,operators.length-1)];
  }

});

export default Exercise;
