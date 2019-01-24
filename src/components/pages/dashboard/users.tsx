import React, { Component } from 'react';
import { Table, Input, Button, Icon, Checkbox, List } from 'semantic-ui-react'
import PcTopWithMobx from '../../withMobx/PcTopWithMobx';
import BackendLayout from '../../withMobx/BackendLayout';
import UserTable from '../../withMobx/UserTable';
import PcFooter from '../../stateless/PcFooter';
const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
  ]

class UserAdmin extends Component {
    constructor(props:any) {
        super(props);
        
    }

    render(){
        return (
            <div className="App-page">
                <PcTopWithMobx />
                <BackendLayout title="用户管理">
                <Input placeholder='搜索　用户名|手机号|邮箱|爱好　' style={{width: "90%"}} />
                <UserTable />
                
                </BackendLayout>
                <PcFooter />
            </div>
        )
    }
}

export default UserAdmin;