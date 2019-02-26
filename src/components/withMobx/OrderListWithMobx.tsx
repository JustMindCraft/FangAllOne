import React from 'react';
import OrderListSearch from '../stateless/OrderListSearch';
import OrderList from '../stateless/OrderList';

interface IOrdersListWithMobx {
    store: any
}

class OrderListWithMobx extends React.Component<IOrdersListWithMobx> {
    handleDateChange = (date: any) => {

    }
    handleTimeChange = (time: any) => {

    }
    render(){
        return (
            <div>
                <OrderListSearch 
                    handleDateChange={this.handleDateChange} 
                    handleTimeChange={this.handleTimeChange}/>
                <OrderList/>
            </div>
        )
    }
}

export default OrderListWithMobx as any;