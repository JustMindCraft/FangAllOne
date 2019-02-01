import React, { Component } from 'react';
import TopBar  from '../stateless/TopBar';
import { inject, observer } from 'mobx-react';

interface IPcTopWithMobxProps{
    currentUser: any,
    msg:any,
}

@inject('msg')
@inject('currentUser')
@observer
class TopBarWithMobx extends Component<IPcTopWithMobxProps> {
    componentDidMount(){
        const { currentUser } = this.props;
        currentUser.getUserInfo();
    }
    logout = () => {
        this.props.msg.show('正在登出');;
        this.props.currentUser.logOut();
        this.props.msg.show('您已登出');;


    }
    componentWillUnmount(){

    }
    render(){
        const { currentUser } = this.props;
        const { isLogined, username, fetching } = currentUser;
        
        return(
            <TopBar isLogined={isLogined}/>
        )
    }
}


export default TopBarWithMobx as any;