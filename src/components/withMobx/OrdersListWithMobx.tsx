import React, { Component } from 'react';
import OrdersList from '../stateless/OrdersList';


interface IOrdersListWithMobx {
    store: any
}

class OrdersListWithMobx extends Component<IOrdersListWithMobx> {
    
    render(){
        const { store } = this.props;

        return (
            <div style={{
                width:'85%',
                minWidth: '320px',
                maxWidth: '500px'
            }}>
                <OrdersList/>
                <h1>内容1</h1>
            </div>
        )
    }
}

export default OrdersListWithMobx;