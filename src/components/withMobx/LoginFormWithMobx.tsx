import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginForm from '../stateless/LoginForm';

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
    }
    componentWillReact(){
        const { store } = this.props;
        this.props.redirectSuccess(store.isSuccess);
    }
    
    onSubmit = (e:any) => {
        e.preventDefault();
        const {store} = this.props;
        if(!store.isPassed){
            return false;
        }
        store.login()
        
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
            default:
                break;
        }
        
    }
    
    successRedirect = (history:any) => {
        history.push('/dashboard')
    }
    render(){
        const {store} = this.props;
        return (
          
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
            />
                
        )
    }
    
}

export default LoginFormWithMobx as any;