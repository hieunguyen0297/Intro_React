import "./styles.css";
import React from "react";
import TiredMeter from "./components/TiredMeter.js";
import Clock from "./components/Clock.js";
import RandRoll from "./components/RandRoll.js";
import UserName from "./components/UserName.js";
import RecipeSearch from "./components/RecipeSearch.js";

export default class App extends React.Component {
  state = {
    pages: [
      <TiredMeter />,
      <Clock />,
      <RandRoll />,
      <UserName />,
      <RecipeSearch />
    ],
    currentPage: 0
  };

  swapProject(index) {
    this.setState({ currentPage: index });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <div>
          <button onClick={() => this.swapProject(1)}>Clock</button>
          <button onClick={() => this.swapProject(2)}>Rand Roll</button>
          <button onClick={() => this.swapProject(3)}>Username</button>
        </div>

        <div>
          <button onClick={() => this.swapProject(4)}>Recipe Search</button>
        </div>

        {this.state.pages[this.state.currentPage]}
      </div>
    );
  }
}

// export default function App() {
//   let tired = 111;

//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <p>I am level {tired} tired</p>
//     </div>
//   );
// }
