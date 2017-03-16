import React from 'react';

var ExerciseGroup = React.createClass( {
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
      <div className="ExerciseGroup">
        <div className="ExerciseGroup-header">
          <h3>Exercise Group</h3>
        </div>
        <p>
            Exercise
        </p>
      </div>
    );
  }

});

export default ExerciseGroup;
