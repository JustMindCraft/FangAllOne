import React from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import ApplicationAdminWithMobx from '../../withMobx/ApplicationAdminWithMobx';
import { Provider } from 'mobx-react';
import dataContainer from '../../../mobx/DataContainer';


export default class ApplicationAdminPage extends React.Component {
    render() {
        return (
            <LayoutWithMobx>
                <Provider dataContainer={dataContainer}>
                    <ApplicationAdminWithMobx />
                </Provider>
            </LayoutWithMobx>
        )
    }
}