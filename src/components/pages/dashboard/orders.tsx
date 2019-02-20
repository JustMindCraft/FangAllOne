import React from 'react';
import LayoutWithMobx from "../../withMobx/LayoutWithMobx";
import FormCardVertical from '../../stateless/FormCardVertical';
import OrdersListWithMobx from '../../withMobx/OrdersListWithMobx';
import ordersListStore from '../../../mobx/components/OrdersListStore'
import pageStyles from '../pageStyle';
import { IPageProps } from '../../../interfaces/components';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


class Orders extends React.Component<IPageProps> {

    render(){
        const { classes } = this.props;
        return (
            <LayoutWithMobx>
                <FormCardVertical style={{
                    width:'90%',
                    paddingTop:20,
                    minWidth:318,
                    minHeight:500
                }}>
                    <Typography variant='h4' gutterBottom className={classes.title} >
                        订单管理
                    </Typography>
                    <OrdersListWithMobx store={ordersListStore}/>
                </FormCardVertical>
            </LayoutWithMobx>
        )
    }
}

export default withStyles(pageStyles)(Orders);