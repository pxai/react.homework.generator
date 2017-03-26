import React from 'react';


var FormGenerate = React.createClass({
  // Props are set once
  getDefaultProps: function () {
      return {
        who: 'Student',
        pages: 1,
        difficulty: 2
      };
  },

  // State can be changed
  getInitialState: function () {
    return {
      who: this.props.who,
      pages: this.props.pages,
      difficulty: this.props.difficulty
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();
        // We do this way to update and to force re-rendering
        if (typeof this.refs.pages.value === 'string' && this.refs.pages.value !== '') {
          this.setState({
            who: this.refs.who.value,
            pages : this.refs.pages.value,
            difficulty : this.refs.difficulty.value
          });
          this.props.onNewName(this.refs.who.value,);
        }
          this.refs.who.value = '';
          this.refs.pages.value = '';
          this.refs.difficulty.value = '';
  },

   render: function () {
    return (
      <div className="FormGenerate">
        <form onSubmit={this.onButtonClick}>
          <label>Who</label><br />
          <input type="text" ref="who"  /><br />
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
