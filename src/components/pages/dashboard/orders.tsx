import React from 'react';
import LayoutWithMobx from "../../withMobx/LayoutWithMobx";
import FormCardVertical from '../../stateless/FormCardVertical';
import OrdersListWithMobx from '../../withMobx/OrdersListWithMobx';
import ordersListStore from '../../../mobx/components/OrdersListStore'


class Orders extends React.Component{
    render(){
        return (
            <LayoutWithMobx>
                <h1>订单管理</h1>
                <FormCardVertical style={{
                    width:'90%',
                    paddingTop:20,
                    minWidth:318,
                    minHeight:500
                }}>
                    <OrdersListWithMobx store={ordersListStore}/>
                </FormCardVertical>
            </LayoutWithMobx>
        )
    }
}

export default Orders;