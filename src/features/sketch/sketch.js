export default function sketch(p) {
    var fillColor = "#4286f4"; //staring color
    var strokeColor = "#4286f4"; //staring stroke color
    var brushSize = 40; //starting brush size
  
    p.setup = function() {
      p.createCanvas(500, 400, p.P2D);
      p.background('white');
    };
  
    p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
      if(props.saveImage) {
        p.saveCanvas("mydrawing", "jpg");
      }
      if(props.clearCanvas) {
        p.background('white');
      }

    };
  
    p.draw = function() {
      if (p.mouseIsPressed) {
        p.fill(fillColor);
        p.ellipse(p.mouseX, p.mouseY, brushSize, brushSize, 50);
        p.stroke(strokeColor);
      } else {
        p.noFill();
        p.noStroke();
      }
    };
  }
  