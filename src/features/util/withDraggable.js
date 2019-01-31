// HOC that makes component draggable on screen
import React, {Component} from 'react';

export default function(WrappedComponent) {
    class withDraggable extends Component {
      constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }
  
      componentDidMount() {
        this.dragElement(this.myRef.current)
      }
  
      componentWillUnmount() {
      }
      dragElement(elmnt) {
          var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
          if (document.getElementById(elmnt.id + "header")) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
          } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
          }
        
          function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
          }
        
          function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
          }
        
          function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
          }
        }
      render() {
        return (
          <div style={styles.myDiv} ref={this.myRef}>
            <div style={styles.myDivHeader}>...</div>
            <WrappedComponent {...this.props} />
          </div>
        );
      }
    };
    return withDraggable;
  }

  const styles = {
    myDiv: {
      position: "absolute",
      zIndex: 9,
      backgroundColor: "#f1f1f1",
      textAlign: "center",
      border: "1px solid #d3d3d3"
    },
    myDivHeader: {
      padding: 10,
      cursor: "move",
      zIndex: 10,
      backgroundColor: "#2196F3",
      color: "#fff"
    }
  }