import React from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import orderDetailStore from '../../../mobx/components/OrderDetailStore';
import OrderDetailFormWithMobx from '../../withMobx/OrderDetailFormWithMobx';
import pageStyles from '../pageStyle';
import { IPageProps } from '../../../interfaces/components';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


class OrderDetail extends React.Component<IPageProps> {

    render() {
        const { classes } = this.props;
        return (
            <LayoutWithMobx>
                <Typography variant='h4' gutterBottom className={classes.title} >
                    订单详情
                </Typography>
                <OrderDetailFormWithMobx store={orderDetailStore}/>
            </LayoutWithMobx >
    )
    }
}

export default withStyles(pageStyles)(OrderDetail);