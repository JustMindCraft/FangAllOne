import React from 'react';
import MobileTop from '../stateless/MobileTop';
import { observer, inject } from 'mobx-react';

interface IMobileTopWithMobxProp{
    app: any;
    toggleDrawer: any;
    currentUser: any;
}


@inject('app')
@inject('currentUser')
@observer
class MobileTopWithMobx extends React.Component<IMobileTopWithMobxProp> {
    render(){
        const { app, toggleDrawer, currentUser } = this.props;

        return (
            <MobileTop  isLogined={currentUser}  appName={app.name} toggleDrawer={toggleDrawer} />
        )
    }
}


export default MobileTopWithMobx as any;