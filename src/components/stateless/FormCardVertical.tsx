import React from 'react';
import { Paper, createStyles, withStyles, withWidth } from '@material-ui/core';
import { isWidthDown } from '@material-ui/core/withWidth';


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
  console.log(props.width);
  
    const isMobile = isWidthDown('sm', props.width);
    return (
        <Paper className={props.classes.paper}  style={{...props.style, maxWidth: isMobile? 320: 800}}>
            {props.children}
        </Paper>
    )  
}


export default withWidth()(withStyles(styles)(FormCardVertical));