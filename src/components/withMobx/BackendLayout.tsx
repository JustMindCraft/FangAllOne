import React, { Component } from 'react';
import { Button, Header, Icon, Input, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { withRouter } from 'react-router';


interface IBackendLayutProps{
    title: string,
    history: any,
}
interface IBackendLayoutState{
    visible: boolean,
    left: string,
}

class BackendLayout extends Component<IBackendLayutProps, IBackendLayoutState> {
    constructor(props:any){
        super(props);
        this.state = { visible: false, left: "1%" }

    }

    handleToggle = () => {
        const { visible } = this.state;
        if(visible){
            this.setState({ visible: false, left: '1%' });
        }else{
            this.setState({ visible: true, left: '340px' });

        }
    }

    handleItemClick = (path: any) => {
        const { history } = this.props;
        history.push(path);
        this.setState({ visible: false, left: '1%' });
    }

    render(){
        const { visible, left } = this.state
        const { history } = this.props;
        console.log(visible);
        
        return(
            <div style={{
                height: "100%", width: '100%',
                
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                alignContent: "baseline",
                justifyContent: "space-evenly",
                justifyItems: "center"
                }}>
                   
                    <Sidebar.Pushable as={Segment} style={{width: "100%"}}>
                    <Sidebar
                        as={Menu}
                        animation="scale down"
                        direction='left'
                        icon='labeled'
                        inverted
                        vertical
                        visible={visible}
                        
                        width='wide'
                    >
                        <Menu.Item as='div' >
                        <Input placeholder='搜索' />
                        </Menu.Item>
                        <Menu.Item as='a'  onClick={()=>this.handleItemClick('/dashboard')}>
                        <Icon name='home' />
                        面板
                        </Menu.Item>
                        <Menu.Item as='a' onClick={()=>this.handleItemClick('/dashboard/users')}>
                        <Icon name='users'  />
                        用户管理
                        </Menu.Item>
                        <Menu.Item as='a'>
                             <Icon name='setting' />
                                系统设置
                        </Menu.Item>
                    </Sidebar>
                    <Button icon onClick={this.handleToggle} style={{
                        position: "fixed",
                        left,
                        top: "1%",
                        height: "auto",
                        zIndex: "300",
                    }}>
                        <Icon name='list' />
                    </Button>
                    <Sidebar.Pusher>
                        <Segment basic style={{width:'100%', height: '100%'}}>
                            <Header as='h3'>{this.props.title}</Header>
                            <div style={{width: '99%', overflowX: 'auto', overflowY: 'auto'}}>
                                {this.props.children}

                            </div>
                        </Segment>
                    </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
        )
    }
}

export default withRouter(BackendLayout as any) as any;