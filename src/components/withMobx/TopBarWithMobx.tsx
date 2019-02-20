import React, { Component } from 'react';
import TopBar  from '../stateless/TopBar';
import { inject, observer } from 'mobx-react';
import homeBannerStore from '../../mobx/components/HomeBannerStore';
interface IPcTopWithMobxProps{
    currentUser: any,
    msg:any,
    app: any,
    toggleDrawer: any
}

@inject('msg')
@inject('currentUser')
@inject('app')
@observer
class TopBarWithMobx extends Component<IPcTopWithMobxProps> {
    componentDidMount(){
        const { currentUser } = this.props;
        currentUser.getUserInfo();
        
        homeBannerStore.getImg();
       
        
    }
    logout = () => {
        this.props.msg.show('正在登出');;
        this.props.currentUser.logOut();
        this.props.msg.show('您已登出');;


    }
    componentWillUnmount(){

    }
    render(){
        const { currentUser, app, toggleDrawer } = this.props;
        
        const { isLogined, username, fetching } = currentUser;
        
        return(
            <TopBar toggleDrawer={toggleDrawer} appName={app.name} isLogined={isLogined}/>
        )
    }
}


export default TopBarWithMobx as any;