import React from 'react';

var Exercise = React.createClass( {
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
      <div className="Exercise">
        <div className="Exercise-header">

        </div>
        <div className="result">
            Exercise
        </div>
      </div>
    );
  }

});

export default Exercise;
