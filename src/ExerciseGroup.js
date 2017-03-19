import React from 'react';
import Exercise from './Exercise';

var ExerciseGroup = React.createClass( {
  getDefaultProps: function () {
      return {
        title: 'React Homework Generator',
        operations: [0,0,0,0,0,0,0,0]
      };
  },

  getInitialState: function () {
    return {};
  },
  generateExercises : function () {

  },
  render: function () {
    return (
      <div className="ExerciseGroup">
        <div className="ExerciseGroup-header">
          <h3>Exercise Group</h3>
        </div>
        <div>
          {this.props.operations.map(function(operation) {
            return <Exercise operator="+" />
            })
          }
        </div>
      </div>
    );
  }

});

export default ExerciseGroup;
