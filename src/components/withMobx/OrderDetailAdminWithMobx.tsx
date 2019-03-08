import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import OrderDetailAdmin from '../stateless/OrderDetailAdmin';
import { styles } from '../../css/common'

interface IOrderDetailAdminWithMobx {
    classes: any,
    
}

class OrderDetailAdminWithMobx extends React.Component<IOrderDetailAdminWithMobx> {
    state = {
        open: false,
        orderNo: '14b52f1b',
        status: '待发货',
        orderTime: '2019-03-16'
    }

    handleClickOpen = () => {
        console.log(event)
    }

    handleClose = () => {
        console.log(event)
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <OrderDetailAdmin 
                    handleClickOpen={this.handleClickOpen}
                    handleClose={this.handleClose}
                    open={this.state.open}
                    orderNo={this.state.orderNo}
                    status={this.state.status}
                    orderTime={this.state.orderTime}
                />
            </div>
        )
    }
}

export default withStyles(styles)(OrderDetailAdminWithMobx) as any;