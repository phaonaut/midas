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
      clearCanvas: false,
      brush: {
        radius: 50,
        stroke: 0
      }
    };
  }
  onDownloadImage = () => {
    this.setState({saveImage: true});
  }
  onClearCanvas = () => {
    this.setState({clearCanvas: true});
  }
  onUpdateBrushRadius = value => {
    this.setState({...this.state, brush: {...this.state.brush, radius: value}});
  }
  resetStatetoDefault = state => {
    this.setState({[state]: this.getInitialState()[state]});
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
          brush={this.state.brush}
          resetStatetoDefault={this.resetStatetoDefault}
        />
        <BrushToolbarWithDragMe
          onUpdateBrushRadius={this.onUpdateBrushRadius}
          brushRadius={this.state.brushRadius}
        />
      </div>
    );
  }
}

export default App;
