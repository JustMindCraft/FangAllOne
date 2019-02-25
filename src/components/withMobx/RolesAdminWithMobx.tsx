import React from 'react';
import { observer, inject } from 'mobx-react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { element } from 'prop-types';
import AdminPanel from '../stateless/AdminPanel';


interface IRolesAdminWithMobxProps {
    store: any,
    msg: any,
}

@inject('msg')
@observer
class RolesAdminWithMobx extends React.Component<IRolesAdminWithMobxProps>{
    componentDidMount(){
        const { store, msg } = this.props;
        store.listRoles();
        store.createRole({
            name: '新的角色'
        });
    }
    render (){
        const { store } = this.props;
        const { loading, dataSource } = store

        const listItems =  dataSource.map((item:any, index:number)=>{
            return (
                <li key={index}>
                    {item.name}
                </li>
            )
        })
        if(loading){
            return (
                <div>加载中</div>
            )
        }
        return (
            <div>
                <ul>
                {listItems}  
                </ul>
            </div>
        )
    }
}

export default RolesAdminWithMobx as any;