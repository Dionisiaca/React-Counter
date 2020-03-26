import React, { Component } from 'react'; //imrc
import Counter from './counter';

class Counters extends Component {
  //cc
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 4 }
    ]
  };

  handleDelete = counterId => {
    //Parent handles an event
    const counters = this.state.counters.filter(c => c.id !== counterId); //Creating a new array to delete counters
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete} //Event is handled as props
            value={counter.value}
            id={counter.id}
          /> //generating counters dinamically and asigning key values
        ))}
      </div>
    );
  }
}

export default Counters;
