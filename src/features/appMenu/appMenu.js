import React from "react";
import PropTypes from "prop-types";
import { withStyles, Button, Popover, Typography } from "@material-ui/core";

const styles = theme => ({
  container: {
    display: "flex",
    background: theme.palette.background.default
  },
  buttonTextEffect: {
    textDecoration: "underline"
  },
  headerTextEffect: {
    color: "gold",
    userSelect: "none",
    fontWeight: "bold",
    "&:hover": {
      background: "none"
    }
  },
  typography: {
    margin: theme.spacing(2)
  }
});

class MenuBar extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.container}>
        <div className={classes.headerName}>
          <Button className={classes.headerTextEffect} onClick={this.handleClick}>
            [ MIDAS ]
          </Button>
        </div>
        <div>
          <Button className={classes.buttonTextEffect} disabled>
            File
          </Button>
          <Button className={classes.buttonTextEffect} disabled>
            Edit
          </Button>
          <Button className={classes.buttonTextEffect} disabled>
            Select
          </Button>
        </div>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <div>
            <Typography className={classes.typography}>Midas Drawing App</Typography>
            <Typography className={classes.typography}>Built using P5 Processing</Typography>
            <div style={{ display: "flex" }}>
              <Typography className={classes.typography}>Rodney Gordon</Typography>
              <Typography className={classes.typography}>
                <a href="https://github.com/phaonaut/midas" target="blank">
                  github repo
                </a>
              </Typography>
            </div>
          </div>
        </Popover>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);
