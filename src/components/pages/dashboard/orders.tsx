import React from 'react';
import LayoutWithMobx from "../../withMobx/LayoutWithMobx";
import OrderAdminWithMobx from '../../withMobx/OrderAdminWithMobx';
import orderListStore from '../../../mobx/components/OrderListStore'
import pageStyles from '../pageStyle';
import { IPageProps } from '../../../interfaces/components';
import { withStyles } from '@material-ui/core';
import { Provider } from 'mobx-react';
import dataContainer from '../../../mobx/DataContainer';

class OrderAdminPage extends React.Component<IPageProps> {

    render() {
        return (
            <LayoutWithMobx>
                <Provider dataContainer={dataContainer}>
                    <OrderAdminWithMobx store={orderListStore}/>
                </Provider>
            </LayoutWithMobx>
        )
    }
}

export default withStyles(pageStyles)(OrderAdminPage);