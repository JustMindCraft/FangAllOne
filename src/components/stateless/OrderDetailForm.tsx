import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


const styles = createStyles({
    root: {

    }
})

interface IOrderDetailProps {
    classes: any;
}

const OrderDetail = (props: IOrderDetailProps) => {
    const { classes } = props;
    return (
        <Paper className={classes.root}>

        </Paper>
    )
}

export default withStyles(styles)(OrderDetail);