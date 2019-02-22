import React from 'react';
import Button from '@material-ui/core/Button';
import OrderListSearch from '../stateless/OrderListSearch';
import OrderList from '../stateless/OrderList';

interface IOrdersListWithMobx {
    store: any
}

class OrderListWithMobx extends React.Component<IOrdersListWithMobx> {
    handleDateChange = (date:string) => {

    }
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
                <OrderListSearch handleDateChange={this.handleDateChange} />
                <OrderList/>
            </div>
        )
    }
}

export default OrderListWithMobx;