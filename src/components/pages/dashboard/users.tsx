import React, { Component } from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import UserAdminWithMobx from '../../withMobx//UserAdminWithMobx';


   

class UserAdminPage extends React.Component{
    render(){
        return (
            <LayoutWithMobx>
                <h1>Users</h1>
            </LayoutWithMobx>
        )    
    }
}

export default UserAdminPage;