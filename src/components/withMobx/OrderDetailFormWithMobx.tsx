import React from 'react';
import OrderDetailForm from '../stateless/OrderDetailForm';

interface IOrderDetailFormWithMobx {
    classes: any,
    
}

class OrderDetailFormWithMobx extends React.Component<IOrderDetailFormWithMobx> {
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
        return (
            <div>
                <OrderDetailForm 
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

export default OrderDetailFormWithMobx as any;