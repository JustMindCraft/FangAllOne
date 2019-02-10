import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginForm from '../stateless/LoginForm';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SMSLoginForm from '../stateless/SMSLoginForm';


function TabContainer({ children, dir }:any) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
}

interface ILoginFormWithMobx {
    store: any,
    redirectSuccess: Function,
    msg: any
}
@inject("currentUser")
@inject('msg')
@observer
class LoginFormWithMobx extends Component<ILoginFormWithMobx> {
    componentDidMount(){
        
        this.props.store.reset();
        this.props.store.setModel('sms');

    }
    componentWillReact(){
        const { store } = this.props;
        this.props.redirectSuccess(store.isSuccess);
    }
    
    onSubmit = (e:any) => {
        e.preventDefault();
        const {store, msg} = this.props;
        if(!store.isPassed){
            return false;
        }
        store.login((m:string)=>{
            console.log(m);
            
            msg.show(m);
        });
        
        
    }

    onSMSSubmit = (e:any) => {
        e.preventDefault();
        const {store, msg} = this.props;
        
        if(!store.smsIsPassed){
            return false;
        }
        store.login((m:string)=>{
            console.log(m);
            
            msg.show(m);
        });
    }

    handleInputChange = (event:any, key:string) => {
        const {store} = this.props;
        const value = event.target.value;
        switch (key) {
            case "username":
                store.changeUsername(value);
                break;
            case "password":
                store.changePassword(value);
                break;
            case 'mobileInput':
                store.changeMobileInput(value);
                break;
            case 'smsInput':
                store.changeSmsInput(value);
                break;
            default:
                break;
        }
        
    }
    state = {
        value: 0,
      };
    
      handleChange = (event:any, value:any) => {
        console.log(value);
        if(value === 0){
            this.props.store.setModel('sms');
        }
        if(value === 1){
            this.props.store.setModel('password');
        }

        this.setState({ value });
      };
    
      handleChangeIndex = (index:number) => {
          
        this.setState({ value: index });
      };
    
    successRedirect = (history:any) => {
        history.push('/dashboard')
    }
    render(){
        const { store } = this.props;
        
        return (
          <div style={{
              width: "50%",
              minWidth: '320px',
              maxWidth: '500px'
          }}>
              <AppBar position="relative" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="手机验证登录" />
                        <Tab label="密码登录" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
                >
                <TabContainer>
                <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                    <SMSLoginForm 
                   onSubmit={this.onSMSSubmit} 
                   handleInputChange={this.handleInputChange}
                   msg={store.msg}
                   msgType={store.msgType}
                   startInput={store.startInput}
                   isPassed={store.smsIsPassed}
                   isSubmit={store.isSubmit}
                   submitBtnHidden={store.submitBtnHidden}
                   logining={store.logining}
                   isSuccess={store.isSuccess}
                   backCount={()=>store.backCount()}
                   isCounting = {store.isCounting}
                   smsCounter = {store.smsCounter}
                   />
                    </div>
                   
                </TabContainer>
                <TabContainer>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                    <LoginForm 
                        onSubmit={this.onSubmit} 
                        handleInputChange={this.handleInputChange}
                        msg={store.msg}
                        msgType={store.msgType}
                        startInput={store.startInput}
                        isPassed={store.isPassed}
                        isSubmit={store.isSubmit}
                        submitBtnHidden={store.submitBtnHidden}
                        logining={store.logining}
                        isSuccess={store.isSuccess}
                        password={store.password}
                    />
                    </div>
                   
                </TabContainer>
                </SwipeableViews>
           
          </div>
            
                
        )
    }
    
}

export default LoginFormWithMobx as any;