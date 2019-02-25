import React, { Component } from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
// import UserAdminWithMobx from '../../withMobx//UserAdminWithBox';

   

class UserAdminPage extends React.Component{
    render(){
        return (
            <LayoutWithMobx>
               <h1>用户管理</h1>
               {/* <UserAdminWithMobx /> */}
            </LayoutWithMobx>
        )    
    }
}

export default UserAdminPage;