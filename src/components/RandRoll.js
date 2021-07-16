import "../styles.css";
import React from "react";

export default class RandRoll extends React.Component {
  state = { roll: 0 };
  render() {
    return (
      <div className="tired">
        <h3>Roll: {this.state.roll}</h3>
        <button onClick={() => this.roll()}>Roll</button>
      </div>
    );
  }
  roll() {
    this.setState({
      roll: Math.floor(Math.random() * 6) + 1
    });
  }
}
