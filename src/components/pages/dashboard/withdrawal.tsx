import React from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import WithdrawalAdminWithMobx from '../../withMobx/WithdrawalAdminWithMobx'
import { Provider } from 'mobx-react';
import dataContainer from '../../../mobx/DataContainer';
import dialogContainer from '../../../mobx/Dialog';

export default class WithdrawalAdminPage extends React.Component {
    render() {
        return (
            <LayoutWithMobx>
                <Provider dataContainer={dataContainer} dialogContainer={dialogContainer}>
                    <WithdrawalAdminWithMobx />
                </Provider>
            </LayoutWithMobx>
        )
    }
}