import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";
import { Slider } from "@material-ui/core";

const styles = theme => ({
  container: {
    width: 300,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: `${theme.spacing.unit / 2}px`,
    background: theme.palette.background.default
  },
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
  },
  slider: {
    margin: "0 5px",
    padding: "12px 0px"
  }
});

class BrushToolbar extends React.Component {
  state = {
    brushValue: 50,
    strokeValue: 0
  };

  handleBrushChange = (event, brushValue) => {
    this.setState({ brushValue });
    this.props.onUpdateBrushRadius(brushValue);
  };

  handleStrokeChange = (event, strokeValue) => {
    this.setState({ strokeValue });
  };

  render() {
    const { classes } = this.props;
    const { brushValue, strokeValue } = this.state;

    return (
      <div className={classes.container}>
        <div className={classes.sliderContainer}>
          <Typography>Radius</Typography>
          <Slider step={25} marks min={0} max={100} classes={{ root: classes.slider }} value={brushValue} onChange={this.handleBrushChange} />
          <Typography>{Math.round(brushValue)}</Typography>
        </div>
        <div className={classes.sliderContainer}>
          <Typography>Stroke</Typography>
          <Slider classes={{ root: classes.slider }} value={strokeValue} onChange={this.handleStrokeChange} disabled />
          <Typography>{Math.round(strokeValue)}</Typography>
        </div>
      </div>
    );
  }
}

BrushToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  brushRadius: PropTypes.number.isRequired,
  onUpdateBrushRadius: PropTypes.func.isRequired
};

export default withStyles(styles)(BrushToolbar);
