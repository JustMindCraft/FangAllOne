import React from 'react';
import RegisterFormWithMobx from '../withMobx/RegisterFormWithMobx';
import registerFormStore from '../../mobx/components/RegisterFormStore';
import { withRouter } from 'react-router';
import { IPageProps } from '../../interfaces/components';
import { observer, inject } from 'mobx-react';
import { Typography } from '@material-ui/core';
import LayoutWithMobx from '../withMobx/LayoutWithMobx';
import FormCardVertical from '../stateless/FormCardVertical';

@inject('currentUser')
@inject('msg')
@inject('app')
@observer
class Register extends React.Component<IPageProps> {
    redirectSuccess = (isSuccess:any) => {
        const { history } = this.props;
        if(isSuccess){
            history.push('/dashboard');
            this.props.msg.show('注册成功');
            this.props.currentUser.checkLogined();
        }
        
    }
    
    render(){

        return (
            <LayoutWithMobx>
                 <FormCardVertical style={{
                   minWidth: 300,
                   paddingBottom: 40,
                   paddingTop: 20,
                   
               }}>
                 <Typography variant="h4">
                    注册账号
                </Typography>
                <RegisterFormWithMobx store={registerFormStore} redirectSuccess={this.redirectSuccess} />

                </FormCardVertical>
                
            </LayoutWithMobx>
        )
    }
    
}

export default withRouter(Register as any);