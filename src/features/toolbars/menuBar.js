import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    background: theme.palette.background.default,
  },
  headerName: {
    position: "fixed",
    left: "calc(100vw / 2)"
  },
  headerTextEffect: {
    color: "#666",
    userSelect: "none",
    fontWeight: "bold"
  }
});

class MenuBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div>
          <Button disabled>File</Button>
          <Button disabled>Edit</Button>
          <Button disabled>Select</Button>
        </div>
        <div className={classes.headerName}>
          <Button className={classes.headerTextEffect} disabled>MIDAS</Button>
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);