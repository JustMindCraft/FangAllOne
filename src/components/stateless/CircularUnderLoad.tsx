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
  }
});
const  CircularUnderLoad = (props:any) => {
  return <CircularProgress disableShrink  className={props.center}/>;
}

export default withStyles(styles)(CircularUnderLoad);