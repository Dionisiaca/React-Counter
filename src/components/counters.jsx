import React, { Component } from 'react'; //imrc
import Counter from './counter';

//cc
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm-m2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete} //Event is handled as props
            onIncrement={this.props.onIncrement}
            counter={counter} //counter simplifies id and value
          /> //generating counters dinamically and asigning key values
        ))}
      </div>
    );
  }
}

export default Counters;
