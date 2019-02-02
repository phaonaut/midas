import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    background: theme.palette.background.default,
  },
  buttonTextEffect: {
    textDecoration: "underline"
  },
  headerTextEffect: {
    color: "gold",
    userSelect: "none",
    fontWeight: "bold"
  }
});

class MenuBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.headerName}>
          <Button className={classes.headerTextEffect} disabled>[ MIDAS ]</Button>
        </div>
        <div>
          <Button className={classes.buttonTextEffect} disabled>File</Button>
          <Button className={classes.buttonTextEffect} disabled>Edit</Button>
          <Button className={classes.buttonTextEffect} disabled>Select</Button>
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);