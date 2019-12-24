import React from "react";
import p5 from "p5";

export default class P5Wrapper extends React.Component {
  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
  }

  UNSAFE_componentWillReceiveProps(newprops) {
    if (this.props.sketch !== newprops.sketch) {
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  render() {
    const brushSize = this.props.brush.radius || 0;
    const cursor = brushSize > 75 ? styles.cursor100 : brushSize > 50 ? styles.cursor75 : brushSize > 25 ? styles.cursor50 : styles.cursor25;
    return <div style={cursor} ref={wrapper => (this.wrapper = wrapper)} />;
  }
}

const styles = {
  cursor25: {
    cursor: "url(cursors/cursor25.png) 12 12, auto"
  },
  cursor50: {
    cursor: "url(cursors/cursor50.png) 25 25, auto"
  },
  cursor75: {
    cursor: "url(cursors/cursor75.png) 35 35, auto"
  },
  cursor100: {
    cursor: "url(cursors/cursor100.png) 50 50, auto"
  }
};
