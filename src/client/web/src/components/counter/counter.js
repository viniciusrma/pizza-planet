import React from 'react';
import './counter.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; //Initial value
  };

  //Decrease by 1 if count is positive. The value should not be less than zero.
  decrement() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    };
  };

  //Increment by 1
  increment() {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="quantity">
        <input type='button' className="sub" onClick={this.decrement.bind(this)} value="-" hover />
        <div for="counter" className="counter">{this.state.count}</div>
        <input type='button' className="add" onClick={this.increment.bind(this)} value="+" />
      </div>
    )
  }
};

export default Counter;