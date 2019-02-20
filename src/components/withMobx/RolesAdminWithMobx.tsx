import React from 'react';
import { observer } from 'mobx-react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { element } from 'prop-types';


interface IRolesAdminWithMobxProps {
    store: any,
}

@observer
class RolesAdminWithMobx extends React.Component<IRolesAdminWithMobxProps>{
    componentDidMount(){
        const { store } = this.props;
        store.listRoles();
        store.createRole({
            name: '新的角色'
        })
    }
    render (){
        const { store } = this.props;
        const { loading, dataSource } = store
      
        
        if(loading){
            return  (
                <div>
                    列表载入中{store.loading}
                </div>
            )
        }

        const RoleItems = dataSource.map((item:any, index:number)=>{
                   return  <ListItem key={index}>
                    <ListItemText primary={item.name}  />
                    </ListItem>
        })
        
        return (
            <div>
                RolesAdminWithMobx{store.loading}\
                <List>
                    {RoleItems}
                </List>
            </div>
        )
    }
}

export default RolesAdminWithMobx;