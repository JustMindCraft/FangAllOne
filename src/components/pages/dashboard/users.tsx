import React, { Component } from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import UserAdminWithMobx from '../../withMobx//UserAdminWithMobx';


class UserAdminPage extends Component {
    constructor(props:any) {
        super(props);
    }
   

    render(){
        return (
            <LayoutWithMobx>
               <h1>用户管理</h1>
               <UserAdminWithMobx />
            </LayoutWithMobx>
        )
    }
}

export default UserAdminPage;