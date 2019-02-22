import React from 'react';
import OrderList from '../stateless/OrderList';
import Button from '@material-ui/core/Button';

interface IOrdersListWithMobx {
    store: any
}

class OrderListWithMobx extends React.Component<IOrdersListWithMobx> {
    
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
                <OrderList/>
            </div>
        )
    }
}

export default OrderListWithMobx;