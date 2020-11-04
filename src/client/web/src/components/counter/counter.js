import React from 'react';
import './counter.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  };
  onclick(type) {
    this.setState(prevState => {
      return { count: type === 'add' ? prevState.count + 1 : prevState.count - 1 }
    });
  };
  render() {
    return (
      <div>
        <div />
        <input type='button' className="sub" onClick={this.onclick.bind(this, 'sub')} value="-" />
        <label for="counter" className="counter">{this.state.count}</label>
        <input type='button' className="add" onClick={this.onclick.bind(this, 'add')} value="+" />
      </div>
    )
  }
};

export default Counter;