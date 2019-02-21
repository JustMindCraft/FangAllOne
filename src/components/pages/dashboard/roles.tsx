import React from 'react';
import RolesAdminWithMobx from '../../withMobx/RolesAdminWithMobx';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import dataContainer from '../../../mobx/DataContainer';


class RolesAdminPage extends React.Component {
    render (){
        return (
            <LayoutWithMobx>
             <h1>角色管理</h1>
             <RolesAdminWithMobx store={dataContainer}/>
            </LayoutWithMobx>
        )
        
    }
}


export default RolesAdminPage;