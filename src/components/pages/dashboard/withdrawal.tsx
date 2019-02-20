import React from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import WithdrawalAdminWithMobx from '../../withMobx/WithdrawalAdminWithMobx'


export default class WithdrawalAdminPage extends React.Component {
    render() {
        return(
            <LayoutWithMobx>
              <WithdrawalAdminWithMobx />
            </LayoutWithMobx>
        )
    }
}