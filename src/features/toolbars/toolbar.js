import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip, withStyles} from '@material-ui/core';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';
import {Brush as BrushIcon, Colorize as ColorizeIcon, ColorLens as ColorLensIcon,
        Crop as CropIcon, DeleteForever as DeleteForeverIcon, Edit as EditIcon,
        FormatColorFill as FormatColorFillIcon, SaveAlt as SaveAltIcon, Save as SaveIcon} from '@material-ui/icons';

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
  trashIcon: {
    "&:hover": {
      backgroundColor: "red"
    }
  }
});

class BrushToolBar extends React.Component {
  state = {
    selectedTool: 'brush'
  };

  handleAlignment = (event, selectedTool) => this.setState({ selectedTool });

  render() {
    const { classes } = this.props;
    const { selectedTool } = this.state;

    return (
      <div className={classes.toggleContainer}>
        <ToggleButtonGroup className={classes.root} value={selectedTool} exclusive onChange={this.handleAlignment}>
          <ToggleButton value="brush">
            <Tooltip title="Brush" placement="right">
              <BrushIcon />
            </Tooltip>
          </ToggleButton>
          
          <ToggleButton value="edit" disabled>
            <Tooltip title="Pencil" placement="right">
              <EditIcon />
            </Tooltip>
          </ToggleButton>
          
          <ToggleButton value="colorize" disabled>
            <Tooltip title="Color Picker" placement="right">
              <ColorizeIcon />
            </Tooltip>
          </ToggleButton>
          
          <ToggleButton value="crop" disabled>
            <Tooltip title="Crop" placement="right">
              <CropIcon />
            </Tooltip>
          </ToggleButton>
          
          <ToggleButton value="colorlens" disabled>
            <Tooltip title="Color Palette" placement="right">
              <ColorLensIcon />
            </Tooltip>
          </ToggleButton>

          <ToggleButton value="formatcolorfill" disabled>
            <Tooltip title="Color Fill" placement="right">
              <FormatColorFillIcon />
            </Tooltip>
          </ToggleButton>

          <ToggleButton disabled value="blankspace" />
          
          <ToggleButton value="savealt" onClick={this.props.onDownloadImage}>
            <Tooltip title="Download Image" placement="left">
              <SaveAltIcon />
            </Tooltip>
          </ToggleButton>

          <ToggleButton value="save" disabled>
            <Tooltip title="Brush" placement="left">
              <SaveIcon />
            </Tooltip>
          </ToggleButton>
          
          <ToggleButton disabled value="blankspace" />
          
          <ToggleButton value="deleteforever" className={classes.trashIcon} onClick={this.props.onClearCanvas}>
            <Tooltip title="Clear Canvas" placement="right">
              <DeleteForeverIcon />
            </Tooltip>
          </ToggleButton>

        </ToggleButtonGroup>
      </div>
    );
  }
}

BrushToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onDownloadImage: PropTypes.func.isRequired,
  onClearCanvas: PropTypes.func.isRequired
};

export default withStyles(styles)(BrushToolBar);
