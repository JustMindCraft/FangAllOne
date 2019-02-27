import React from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import ApplicationAdminWithMobx from '../../withMobx/ApplicationAdminWithMobx';


export default class ApplicationAdminPage extends React.Component {
    render() {
        return(
            <LayoutWithMobx>
              <ApplicationAdminWithMobx />
            </LayoutWithMobx>
        )
    }
}