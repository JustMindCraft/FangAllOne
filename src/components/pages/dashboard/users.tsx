import React, { Component } from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';


class UserAdmin extends Component {
    constructor(props:any) {
        super(props);
        
    }
   

    render(){
        return (
            <LayoutWithMobx>
               <h1>用户管理</h1>
            </LayoutWithMobx>
        )
    }
}

export default UserAdmin;