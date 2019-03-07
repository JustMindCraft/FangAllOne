import React from 'react';
import RolesAdminWithMobx from '../../withMobx/RolesAdminWithMobx';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import { Provider } from 'mobx-react';
import dataContainer from '../../../mobx/DataContainer';


class RolesAdminPage extends React.Component {
    render() {
        return (
            <LayoutWithMobx>
                <Provider dataContainer={dataContainer}>
                    <RolesAdminWithMobx/>
                </Provider>
            </LayoutWithMobx>
        )

    }
}


export default RolesAdminPage;