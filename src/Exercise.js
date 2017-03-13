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
          <h3>Exercise</h3>
        </div>
        <p>
            Exercise
        </p>
      </div>
    );
  }

});

export default Exercise;
