import "../styles.css";
import React from "react";

export default class UserName extends React.Component {
  state = { username: "" };
  render() {
    return (
      <div className="username">
        <p>{this.state.username}</p>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => this.setState({ username: e.target.value })}
        ></input>
      </div>
    );
  }
}
