import React from 'react';
import LayoutWithMobx from "../../withMobx/LayoutWithMobx";
import OrderListWithMobx from '../../withMobx/OrderListWithMobx';
import orderListStore from '../../../mobx/components/OrderListStore'
import pageStyles from '../pageStyle';
import { IPageProps } from '../../../interfaces/components';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


class OrderAdminPage extends React.Component<IPageProps> {

    render(){
        const { classes } = this.props;
        return (
            <LayoutWithMobx>
                <Typography variant='h4' gutterBottom className={classes.title} >
                        订单管理
                </Typography>
                <OrderListWithMobx store={orderListStore}/>
            </LayoutWithMobx>
        )
    }
}

export default withStyles(pageStyles)(OrderAdminPage);