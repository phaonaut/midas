import React from "react";
import PropTypes from "prop-types";
import Picker from "vanilla-picker";
import { withStyles } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    background: theme.palette.background.default
  },
  toggleContainer: {
    padding: `${theme.spacing()}px ${theme.spacing()}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.default
  }
});

class ColorPickerBar extends React.Component {
  constructor(props) {
    super(props);
    this.colorPicker = React.createRef();
  }
  componentDidMount() {
    this.colorPickerSetup(this.colorPicker.current, this.onColorSelected);
  }
  onColorSelected = color => {
    this.props.onColorSelected(color.hex);
  };
  colorPickerSetup(ref, onColorSelected) {
    var picker = new Picker({
      parent: ref,
      color: "gold",
      onChange: function(color) {
        ref.style.backgroundColor = color.rgbaString;
        onColorSelected(color);
      },
      popup: false
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup value="brush" exclusive>
            <ToggleButton value="brush">Brush</ToggleButton>
            <ToggleButton value="stroke" disabled>
              Stroke
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div ref={this.colorPicker} />
      </div>
    );
  }
}

ColorPickerBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onColorSelected: PropTypes.func.isRequired
};

export default withStyles(styles)(ColorPickerBar);
