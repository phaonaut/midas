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
  trashIcon: {
    "&:hover": {
      backgroundColor: "red"
    }
  }
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
          <ToggleButton value="edit" disabled>
            <EditIcon />
          </ToggleButton>
          <ToggleButton value="colorize" disabled>
            <ColorizeIcon />
          </ToggleButton>
          <ToggleButton value="crop" disabled>
            <CropIcon />
          </ToggleButton>
          <ToggleButton value="colorlens" disabled>
            <ColorLensIcon />
          </ToggleButton>
          <ToggleButton value="formatcolorfill" disabled>
            <FormatColorFillIcon />
          </ToggleButton>

          <ToggleButton disabled value="blankspace" />
          
          <ToggleButton value="savealt" onClick={this.props.onDownloadImage}>
            <SaveAltIcon />
          </ToggleButton>
          <ToggleButton value="save" disabled>
            <SaveIcon />
          </ToggleButton>
          
          <ToggleButton disabled value="blankspace" />
          
          <ToggleButton value="deleteforever" className={classes.trashIcon} onClick={this.props.onClearCanvas}>
            <DeleteForeverIcon />
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
