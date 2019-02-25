import React from 'react';
import RolesAdminWithMobx from '../../withMobx/RolesAdminWithMobx';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import rolesAdmin from '../../../mobx/components/RolesAdmin';


class RolesAdminPage extends React.Component {
    render (){
        return (
            <LayoutWithMobx>
             <h1>角色管理</h1>
             <RolesAdminWithMobx store={rolesAdmin}/>
            </LayoutWithMobx>
        )
        
    }
}


export default RolesAdminPage;