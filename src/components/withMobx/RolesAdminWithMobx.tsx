import React from 'react';


interface IRolesAdminWithMobxProps {
    store: any,
}

class RolesAdminWithMobx extends React.Component<IRolesAdminWithMobxProps>{
    componentDidMount(){
        const { store } = this.props;
        store.listRoles();
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