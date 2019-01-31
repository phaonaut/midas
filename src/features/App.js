import React, { Component } from 'react';
import './App.css';
import P5Wrapper from "./util/P5Wrapper";
import sketch from "./sketch/sketch";
import withDragMe from "./util/withDragMe";
import ToolBar from "./toolbars/toolbar"

const ToolBarWithDragMe = withDragMe(ToolBar, "toolbar", {top: 5, left: 5});
const P5WrapperWithDragMe = withDragMe(P5Wrapper, "p5wrapper", {top: 5, left: 100});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToolBarWithDragMe />
        <P5WrapperWithDragMe sketch={sketch} />
      </div>
    );
  }
}

export default App;
