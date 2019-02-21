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
        store.setSourceName('roles');
        store.setCondition({});
        store.getList(null, (m: any)=>{
            msg.show(m);
        })
        // store.sort('name', "ASC", (m: any)=>{
        //     msg.show(m);
        // })
    }
    render (){
        const { store } = this.props;
        const { loading, list, title, one } = store

     
        
        return (
            <div>
              <AdminPanel list={list} title={title} one={one}/>
            </div>
        )
    }
}

export default RolesAdminWithMobx as any;