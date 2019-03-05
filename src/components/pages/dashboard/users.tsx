import React, { Component } from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import { Provider } from 'mobx-react';
import UserAdminWithMobx from '../../withMobx//UserAdminWithMobx';
import dataContainer from '../../../mobx/DataContainer';

class UserAdminPage extends Component {
    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <LayoutWithMobx>
                <Provider dataContainer={dataContainer}>
                    <UserAdminWithMobx />
                </Provider>
            </LayoutWithMobx>
        )    
    }
}

export default UserAdminPage;