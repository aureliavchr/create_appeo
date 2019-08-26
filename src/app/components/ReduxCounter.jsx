import React, { Component } from "react";

class ReduxCounter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button  onClick={this.props.decrement}>-</button>
        <button onClick={this.props.increment}>+</button>
      </div>
    )
  }
}

export default ReduxCounter