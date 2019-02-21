import React, { Component } from 'react';
import OrdersList from '../stateless/OrdersList';
import Button from '@material-ui/core/Button';

interface IOrdersListWithMobx {
    store: any
}

class OrdersListWithMobx extends Component<IOrdersListWithMobx> {
    
    render(){
        const { store } = this.props;

        return (
            <div>
                <Button variant="contained" style={{
                    paddingRight:'20px'
                }}>
                    导出
                </Button>
                <br/>
                <OrdersList/>
            </div>
        )
    }
}

export default OrdersListWithMobx;