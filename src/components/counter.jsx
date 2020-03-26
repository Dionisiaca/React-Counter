import React, { Component } from 'react';

class Counter extends Component {
  // we can also export default our modules here
  render() {
    return (
      //Conditional rendering ex
      <div>
        <span className={this.getBatchClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} //passing parameters in a simpler and cleaner way
          style={{ fontSize: 16 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} //Raising an event from the parent component
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div> //can use React.Fragment instead of divs. ctrl + d to select
    );
  }

  getBatchClasses() {
    //refactor --> new method --> rename
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    // ussing expression
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value; //operador ? = condicion, : else. Sugar syntax for if/else
  }
}

export default Counter; // better to export modules at the end
