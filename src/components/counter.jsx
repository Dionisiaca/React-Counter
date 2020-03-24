import React, { Component } from 'react';

class Counter extends Component {
  // we can also export default our modules here
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl:
      'data:image/jpeg;base64,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'
  };

  /*styles = {
    fontSize: 24,
    fontWeight: 'bold'
  };*/

  renderTags() {
    //Conditional rendering
    if (this.state.tags.length === 0) return <p>no tags found!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li> // fixing key issues. When working with objects, it should be key.id
        ))}
      </ul>
    );
  }

  /*constructor() {
    //Constructors helps binding event handlers to this
    super(); //key word to access to this
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  handleIncrement = e => {
    console.log(e);
    //arrow fn allows us to acces to this without constructors
    //handling events
    //console.log('increment click', this);
    //this.state.count++; --> this doesn't work on react
    this.setState({ count: this.state.count + 1 }); //this tells react something has change
  };

  /*doHandleIncrement = () => {
    //defining another method as a wrapper to pass an argument is not efective
    this.handleIncrement({ id: 1 });
  };*/

  render() {
    return (
      //Conditional rendering ex
      <div>
        <span style={this.styles} className={this.getBatchClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })} //passing parameters in a simpler and cleaner way
          style={{ fontSize: 16 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && 'Please create a new tag'}
        {this.renderTags()}
      </div> //can use React.Fragment instead of divs. ctrl + d to select
    );
  }

  getBatchClasses() {
    //refactor --> new method --> rename
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    // ussing expression
    const { count } = this.state;
    return count === 0 ? 'Zero' : count; //operador ? = condicion, : else. Sugar syntax for if/else
  }
}

export default Counter; // better to export modules at the end

//<img src={this.state.imageUrl} alt="cat pic" />
