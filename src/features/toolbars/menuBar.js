import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    background: theme.palette.background.default,
  }
});

class MenuBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Button disabled>File</Button>
        <Button disabled>Edit</Button>
        <Button disabled>Select</Button>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);