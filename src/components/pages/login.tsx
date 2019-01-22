import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { IPageProps } from '../../interfaces/components';
import LoginFormWithMobx from '../withMobx/LoginFormWithMobx';
import loginFormStore from '../../mobx/components/LoginFormStore';

class Login extends React.Component<IPageProps> {
    redirectSuccess = (isSuccess:any) => {
        const { history } = this.props;
        if(isSuccess){
            history.push('/dashboard')
        }
        
    }
    render(){
        return (
            <Container fluid={true} className="App-page">
               <Header as='h1'>登录</Header>
                <LoginFormWithMobx store={loginFormStore} redirectSuccess={this.redirectSuccess} />
            </Container>
        )
    }
    
}

export default withRouter(Login as any);