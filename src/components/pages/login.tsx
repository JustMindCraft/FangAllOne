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
import LayoutWithMobx from '../withMobx/LayoutWithMobx';
import FormCardVertical from '../stateless/FormCardVertical';

@inject('currentUser')
@inject('msg')
@inject('app')
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
        const { app, classes } = this.props;
        return (
            <LayoutWithMobx>
               <FormCardVertical style={{
                   width: '85%',
                   paddingTop: 20,
                   minWidth: 318,
               }}>
                    <Typography variant="h4" gutterBottom className={classes.title}>
                        登录{app.name}
                    </Typography>
                    <LoginFormWithMobx store={loginFormStore} redirectSuccess={this.redirectSuccess} />
               </FormCardVertical>
               
            </LayoutWithMobx>
        )
    }
    
}

export default  withStyles(pageStyles)(withRouter(Login as any));