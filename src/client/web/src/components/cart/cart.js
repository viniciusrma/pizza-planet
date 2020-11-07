import React from 'react';
import './cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Cart">
        <img alt="Shopping Bag" src="./cartimg.png" width="587" height="372" className="CartImg"/>
        <form onSubmit={this.handleSubmit} className="Address">
          <label>
            Address:
          </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} className="InputAddress"/>
          <input type="submit" value="Send" className="OrderButton" />
        </form>
      </div>

    );
  }
};

export default Cart;