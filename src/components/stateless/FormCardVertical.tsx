import React from 'react';
import { Paper, createStyles, withStyles } from '@material-ui/core';


const styles = createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: 277,
    },
  });

const FormCardVertical = (props: any) => {
    return (
        <Paper className={props.classes.paper}  style={props.style}>
            {props.children}
        </Paper>
    )  
}


export default withStyles(styles)(FormCardVertical);