import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = theme => ({
  toggleContainer: {
    height: 56,
    width: 200,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: `${theme.spacing.unit}px 0`,
    background: theme.palette.background.default,
  },
});

class BrushToolBar extends React.Component {
  state = {
    alignment: 'left',
    formats: ['bold'],
  };

  handleFormat = (event, formats) => this.setState({ formats });

  handleAlignment = (event, alignment) => this.setState({ alignment });

  render() {
    const { classes } = this.props;
    const { alignment} = this.state;

    return (
      <div className={classes.toggleContainer}>
        <ToggleButtonGroup value={alignment} exclusive onChange={this.handleAlignment}>
          <ToggleButton value="left">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  }
}

BrushToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrushToolBar);
