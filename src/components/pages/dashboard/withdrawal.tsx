import React from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import WithdrawalAdminWithMobx from '../../withMobx/WithdrawalAdminWithMobx'
import { Provider } from 'mobx-react';
import dataContainer from '../../../mobx/DataContainer';

export default class WithdrawalAdminPage extends React.Component {
    render() {
        return (
            <LayoutWithMobx>
                <Provider dataContainer={dataContainer}>
                    <WithdrawalAdminWithMobx />
                </Provider>
            </LayoutWithMobx>
        )
    }
}