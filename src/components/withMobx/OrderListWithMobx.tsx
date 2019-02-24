import React from 'react';
import Button from '@material-ui/core/Button';
import OrderListSearch from '../stateless/OrderListSearch';
import OrderList from '../stateless/OrderList';

interface IOrdersListWithMobx {
    store: any
}

class OrderListWithMobx extends React.Component<IOrdersListWithMobx> {
    handleDateChange = (date: any) => {

    }
    render(){
        return (
            <div>
                <OrderListSearch handleDateChange={this.handleDateChange} />
                <OrderList/>
            </div>
        )
    }
}

export default OrderListWithMobx as any;