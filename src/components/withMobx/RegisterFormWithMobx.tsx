import React, { Component } from 'react';
import { observer } from 'mobx-react';
import RegisterForm from '../stateless/RegisterForm';

interface IRegisterFormWithMobx {
    store: any,
    redirectSuccess: Function
}
@observer
class RegisterFormWithMobx extends Component<IRegisterFormWithMobx> {
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
        store.register()
        
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
            case "passwordRepeat":
                store.changePasswordRepeat(value);
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
          
            <RegisterForm 
                onSubmit={this.onSubmit} 
                handleInputChange={this.handleInputChange}
                msg={store.msg}
                msgType={store.msgType}
                startInput={store.startInput}
                isPassed={store.isPassed}
                submitBtnHidden={store.submitBtnHidden}
                registering={store.registering}
                isSuccess={store.isSuccess}
            />
                
        )
    }
    
}

export default RegisterFormWithMobx