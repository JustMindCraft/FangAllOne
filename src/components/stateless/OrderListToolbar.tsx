import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';

const styles = createStyles({

})

interface IOrderListToolbar {
    classes: any;
}

const OrderListToolbar = (props:IOrderListToolbar) => {
    const { classes } = props;
    return (
        <Toolbar>

        </Toolbar>
    )
}

export default withStyles(styles)(OrderListToolbar);