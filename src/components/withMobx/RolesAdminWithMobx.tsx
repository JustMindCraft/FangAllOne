import React from 'react';


interface IRolesAdminWithMobxProps {
    store: any,
}

class RolesAdminWithMobx extends React.Component<IRolesAdminWithMobxProps>{
    componentDidMount(){
        const { store } = this.props;
        store.listRoles();
        store.createRole({
            name: '新的角色'
        })
    }
    render (){
        return (
            <div>
                RolesAdminWithMobx
            </div>
        )
    }
}

export default RolesAdminWithMobx;