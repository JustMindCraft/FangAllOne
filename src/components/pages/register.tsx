import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import RegisterFormWithMobx from '../withMobx/RegisterFormWithMobx';
import registerFormStore from '../../mobx/components/RegisterFormStore';
import { withRouter } from 'react-router';
import { IPageProps } from '../../interfaces/components';

class Register extends React.Component<IPageProps> {
    redirectSuccess = (isSuccess:any) => {
        const { history } = this.props;
        if(isSuccess){
            history.push('/dashboard')
        }
        
    }
    
    render(){
        return (
            <Container fluid={true} className="App-page">
               <Header as='h1'>注册</Header>
                <RegisterFormWithMobx store={registerFormStore} redirectSuccess={this.redirectSuccess} />
            </Container>
        )
    }
    
}

export default withRouter(Register as any);