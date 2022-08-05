import React, { Component } from "react";
import Beers from "./Beers";
import List from "./List";
import Beer from "./Beer";

import "./App.css";

class App extends Component {
  



  render() {
    return (
      <div className="App">
        <h2>Beers</h2>
      <Beers />
      <h2>Other Beers</h2>
      <List />
      </div>
    );
  }
}

export default App;
