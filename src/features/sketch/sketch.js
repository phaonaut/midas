export default function sketch(p) {
    var fillColor = "#4286f4"; //staring color
    // var strokeColor = "#4286f4"; //staring stroke color
    var brushRadius = 40; //starting brush size
  
    p.setup = function() {
      p.createCanvas(500, 400, p.P2D);
      p.background('white');
    };
  
    p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
      if(props.saveImage) {
        p.saveCanvas("mydrawing", "jpg");
        props.resetStatetoDefault("saveImage");
      }
      if(props.clearCanvas) {
        p.background('white');
        props.resetStatetoDefault("clearCanvas");
      }
      if(props.brush) {
        brushRadius = props.brush.radius;
        fillColor = props.brush.fillColor;
      }
    };
  
    p.draw = function() {
      if (p.mouseIsPressed) {
        p.fill(fillColor);
        p.ellipse(p.mouseX, p.mouseY, brushRadius, brushRadius, 50);
        // p.rect(p.mouseX, p.mouseY, brushRadius, brushRadius);
        // p.stroke(strokeColor);
        // p.filter( p.BLUR, 6 ); //slow as fudge
      } else {
        p.noFill();
        p.noStroke();
      }
    };
  }
  