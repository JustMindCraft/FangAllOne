import React from 'react';
import OrderDetailForm from '../stateless/OrderDetailForm';

interface IOrderDetailFormWithMobx {
    classes: any,
    
}

class OrderDetailFormWithMobx extends React.Component<IOrderDetailFormWithMobx> {
    state = {

    }

    handleClickOpen = (event:any) => {
        console.log(event)
    }

    handleClose = (event:any) => {
        console.log(event)
    }

    render() {
        return (
            <div>
                <OrderDetailForm 
                    handleClickOpen={this.handleClickOpen}
                    handleClose={this.handleClose}
                />
            </div>
        )
    }
}

export default OrderDetailFormWithMobx as any;