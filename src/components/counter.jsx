import React, { Component } from "react";

class Counter extends Component {  
  render() {
    return (
      <div style={{ fontSize: "30px" }}>
        <span>11</span>
        <button style={{ marginLeft: 10 }}>increment</button>
        <button style={{ marginLeft: 10 }}>decrement</button>
      </div>
    );
  }
}

export default Counter;
