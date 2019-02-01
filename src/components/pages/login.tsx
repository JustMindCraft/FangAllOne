import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { IPageProps } from '../../interfaces/components';
import LoginFormWithMobx from '../withMobx/LoginFormWithMobx';
import loginFormStore from '../../mobx/components/LoginFormStore';
import { observer, inject } from 'mobx-react';
import pageStyles from './pageStyle';
import { withStyles, Typography } from '@material-ui/core';
import Layout from '../stateless/Layout';

@inject('currentUser')
@inject('msg')
@observer
class Login extends React.Component<IPageProps> {
    redirectSuccess = (isSuccess:any) => {
        const { history, currentUser } = this.props;
        if(isSuccess){
            history.push('/dashboard');
            this.props.msg.show('登录成功');
            currentUser.checkLogined();
        
        }
        
    }


    componentDidMount(){
        const { currentUser, history } = this.props;
        if(currentUser.isLogined){
            history.push('/dashboard');
        }
    }
  

    render(){
        return (
            <Layout>
                <Typography variant="h4" gutterBottom>
                    登录正觉工场
                </Typography>
                <LoginFormWithMobx store={loginFormStore} redirectSuccess={this.redirectSuccess} />
            </Layout>
        )
    }
    
}

export default  withStyles(pageStyles)(withRouter(Login as any));