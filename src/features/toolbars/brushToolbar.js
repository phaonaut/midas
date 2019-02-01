import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import { Slider } from '@material-ui/lab';

const styles = theme => ({
  container: {
    width: 300,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: "column",
    margin: `${theme.spacing.unit / 2}px`,
    background: theme.palette.background.default,
  },
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: "100%"
  },
  slider: {
    margin: "0 5px",
    padding: '12px 0px',
  },
});

class BrushToolbar extends React.Component {
  state = {
    value: 50,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.container}>
        <div className={classes.sliderContainer}>
          <Typography>Radius</Typography>
          <Slider
            classes={{ container: classes.slider }}
            value={value}
            onChange={this.handleChange}
            />
          <Typography>{Math.round(value)}</Typography>
        </div>
        <div className={classes.sliderContainer}>
          <Typography>Stroke</Typography>
          <Slider
            classes={{ container: classes.slider }}
            value={value}
            onChange={this.handleChange}
            />
          <Typography>{Math.round(value)}</Typography>
        </div>
      </div>
    );
  }
}

BrushToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrushToolbar);