import React, { Component } from 'react';
import './App.css';
import P5Wrapper from "./util/P5Wrapper";
import sketch from "./sketch/sketch";
import withDraggable from "./util/withDraggable";
import ToolBar from "./toolbars/toolbar"

const ToolBarwithDraggable = withDraggable(ToolBar);

class App extends Component {
  render() {
    return (
      <div className="App">
        <P5Wrapper sketch={sketch} />
        <ToolBarwithDraggable />
      </div>
    );
  }
}

export default App;
