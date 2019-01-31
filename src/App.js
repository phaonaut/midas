import React, { Component } from 'react';
import './App.css';
import P5Wrapper from "./features/util/P5Wrapper";
import sketch from "./features/sketch/sketch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
}

export default App;
