export default function sketch(p) {
    // let rotation = 0;
    var fillColor = "#4286f4"; //staring color
    var strokeColor = "#4286f4"; //staring stroke color
    var brushSize = 40; //starting brush size
  
    p.setup = function() {
      p.createCanvas(500, 400, p.P2D);
      p.background('white');
    };
  
    p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
      // if (props.rotation) {
      //   rotation = (props.rotation * Math.PI) / 180;
      // }
      if(props.saveImage) {
        p.saveCanvas("mydrawing", "jpg");
      }

    };
  
    p.draw = function() {
      console.log("!! mouse", p.mouseX, p.mouseY);
      if (p.mouseIsPressed) {
        p.fill(fillColor);
        p.ellipse(p.mouseX, p.mouseY, brushSize, brushSize, 50);
        p.stroke(strokeColor);
      } else {
        p.noFill();
        p.noStroke();
      }
      // p.background(100);
      // p.noStroke();
      // p.push();
      // p.rotateY(rotation);
      // p.box(100);
      // p.pop();
    };
  }
  