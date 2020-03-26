import React, { Component } from 'react'; //imrc
import Counter from './counter';

//cc
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm-m2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete} //Event is handled as props
            onIncrement={onIncrement}
            counter={counter} //counter simplifies id and value
          /> //generating counters dinamically and asigning key values
        ))}
      </div>
    );
  }
}

export default Counters;
