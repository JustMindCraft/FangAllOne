import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
const styles = (theme:any) => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    margin: 20,
  }
});
const  CircularUnderLoad = (props:any) => {
  return (
  <div className={props.classes.center}>
    <CircularProgress disableShrink  />
  </div>
  )
}

export default withStyles(styles)(CircularUnderLoad);