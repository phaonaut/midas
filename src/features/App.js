import React, { Component } from 'react';
import './App.css';
import P5Wrapper from "./util/P5Wrapper";
import sketch from "./sketch/sketch";
import withDragMe from "./util/withDragMe";
import ToolBar from "./toolbars/toolbar"

const ToolBarWithDragMe = withDragMe(ToolBar, "toolbar", {top: 5, left: 5});
const P5WrapperWithDragMe = withDragMe(P5Wrapper, "p5wrapper", {top: 5, left: 100});

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      saveImage: false
    };
  }
  onDownloadImage = () => {
    this.setState({saveImage: true});
  }
  render() {
    return (
      <div className="App">
        <ToolBarWithDragMe onDownloadImage={this.onDownloadImage} />
        <P5WrapperWithDragMe sketch={sketch} saveImage={this.state.saveImage} />
      </div>
    );
  }
}

export default App;
