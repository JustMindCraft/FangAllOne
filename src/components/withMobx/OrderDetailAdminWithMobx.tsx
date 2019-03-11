import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import OrderDetailAdmin from '../stateless/OrderDetailAdmin';
import { styles } from '../../css/common'
import dataContainer from '../../mobx/DataContainer';

interface IOrderDetailAdminWithMobx {
    classes: any,
    
}

class OrderDetailAdminWithMobx extends React.Component<IOrderDetailAdminWithMobx> {
    state = {
        open: false,
        orderNo: '14b52f1b',
        status: '待发货',
        orderTime: '2019-03-16',
        userName: '',
        userId: '',
        labels: [
            {name: '商品名'},
            {name: '商品编号'},
            {name: '数量'},
            {name: '单价'},
            {name: '金额'},
        ],

    }

    handleClickOpen = () => {
        console.log(event)
    }

    handleClose = () => {
        console.log(event)
    }

    render() {
        const { classes } = this.props
        const { list, loading,} = dataContainer;
        return (
            <div className={classes.root}>
                <OrderDetailAdmin 
                    handleClickOpen={this.handleClickOpen}
                    handleClose={this.handleClose}
                    open={this.state.open}
                    orderNo={this.state.orderNo}
                    status={this.state.status}
                    orderTime={this.state.orderTime}
                    list={list}
                    loading={loading}
                    labels={this.state.labels}
                    userName
                    userNo
                    phoneNo
                    address
                />
            </div>
        )
    }
}

export default withStyles(styles)(OrderDetailAdminWithMobx) as any;