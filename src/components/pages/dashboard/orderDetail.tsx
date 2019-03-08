import React from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import orderDetailStore from '../../../mobx/components/OrderDetailStore';
import OrderDetailFormWithMobx from '../../withMobx/OrderDetailAdminWithMobx';
import pageStyles from '../pageStyle';
import { IPageProps } from '../../../interfaces/components';
import { withStyles, createStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Provider } from 'mobx-react';
import dataContainer from '../../../mobx/DataContainer';
import dialogContainer from '../../../mobx/Dialog';

class OrderDetailAdminPage extends React.Component<IPageProps> {

    render() {
        const { classes } = this.props;
        return (
            <LayoutWithMobx>
                <Provider dialogContainer={dialogContainer}>
                    <OrderDetailFormWithMobx store={orderDetailStore}/>
                </Provider>
            </LayoutWithMobx >
        )
    }
}

export default withStyles(pageStyles)(OrderDetailAdminPage);