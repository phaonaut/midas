import React, { Component } from 'react';
import './App.css';
import P5Wrapper from "./util/P5Wrapper";
import sketch from "./sketch/sketch";
import withDragMe from "./util/withDragMe";
import Toolbar from "./toolbars/toolbar";
import BrushToolbar from "./toolbars/brushToolbar";

const ToolbarWithDragMe = withDragMe(Toolbar, "toolbar", {top: 5, left: 5});
const P5WrapperWithDragMe = withDragMe(P5Wrapper, "p5wrapper", {top: 5, left: 100});
const BrushToolbarWithDragMe = withDragMe(BrushToolbar, "brushtoolbar", {top: 500, left: 100});

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      saveImage: false,
      clearCanvas: false
    };
  }
  onDownloadImage = () => {
    this.setState({...this.getInitialState(), saveImage: true});
  }
  onClearCanvas = () => {
    this.setState({...this.getInitialState(), clearCanvas: true});
  }
  render() {
    return (
      <div className="App">
        <ToolbarWithDragMe
          onDownloadImage={this.onDownloadImage}
          onClearCanvas={this.onClearCanvas}
        />
        <P5WrapperWithDragMe
          sketch={sketch}
          saveImage={this.state.saveImage}
          clearCanvas={this.state.clearCanvas}
        />
        <BrushToolbarWithDragMe />
      </div>
    );
  }
}

export default App;
