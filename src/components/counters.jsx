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
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} id={counter.id}>
            <h4>Counter #{counter.id}</h4>
          </Counter> //generating counters dinamically and asigning key values
        ))}
      </div>
    );
  }
}

export default Counters;
