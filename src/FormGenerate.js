import React from 'react';


var FormGenerate = React.createClass({
  // Props are set once
  getDefaultProps: function () {
      return {
        pages: 1,
        difficulty: 2
      };
  },

  // State can be changed
  getInitialState: function () {
    return {
      pages: this.props.pages,
      difficulty: this.props.difficulty
    };
  },

  onButtonClick: function (e) {
    e.preventDefault();
        // We do this way to update and to force re-rendering
        if (typeof this.refs.pages.value === 'string' && this.refs.pages.value !== '') {
          this.setState({
            pages : this.refs.pages.value,
            difficulty : this.refs.difficulty.value
          });
        }
          this.refs.pages.value = '';
          this.refs.difficulty.value = '';
  },

   render: function () {
    return (
      <div className="FormGenerate">
        <form onSubmit={this.onButtonClick}>
          <label>Pages</label><br />
          <input type="text" ref="pages"  /><br />
          <label>Difficulty</label><br />
          <input type="text" ref="difficulty"  /><br />
          <button>Generate</button>
        </form>
        <div><span>Pages:</span> {this.state.pages}</div>
        <div><span>Difficulty:</span> {this.state.difficulty}</div>
      </div>

    );
  }

});

export default FormGenerate;
