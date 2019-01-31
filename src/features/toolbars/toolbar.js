import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import BrushIcon from '@material-ui/icons/Brush';
import ColorizeIcon from '@material-ui/icons/Colorize';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import CropIcon from '@material-ui/icons/Crop';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  toggleContainer: {
    // height: 56,
    // width: 200,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: `${theme.spacing.unit / 2}px`,
    background: theme.palette.background.default,
  },
  root: {
    display: "flex",
    flexDirection: "column"
  },
});

class BrushToolBar extends React.Component {
  state = {
    selectedTool: 'brush',
    formats: ['bold'],
  };

  handleAlignment = (event, selectedTool) => this.setState({ selectedTool });

  render() {
    const { classes } = this.props;
    const { selectedTool } = this.state;

    return (
      <div className={classes.toggleContainer}>
        <ToggleButtonGroup className={classes.root} value={selectedTool} exclusive onChange={this.handleAlignment}>
          <ToggleButton value="brush">
            <BrushIcon />
          </ToggleButton>
          <ToggleButton value="edit">
            <EditIcon />
          </ToggleButton>
          <ToggleButton value="colorize">
            <ColorizeIcon />
          </ToggleButton>
          <ToggleButton value="crop">
            <CropIcon />
          </ToggleButton>
          <ToggleButton value="colorlens">
            <ColorLensIcon />
          </ToggleButton>
          <ToggleButton value="formatcolorfill">
            <FormatColorFillIcon />
          </ToggleButton>

          <ToggleButton disabled value="blankspace" />
          
          <ToggleButton value="savealt">
            <SaveAltIcon />
          </ToggleButton>
          <ToggleButton value="save">
            <SaveIcon />
          </ToggleButton>
          
          <ToggleButton disabled value="blankspace" />
          
          <ToggleButton value="deleteforever">
            <DeleteForeverIcon />
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
