import React from 'react';
import RegisterFormWithMobx from '../withMobx/RegisterFormWithMobx';
import registerFormStore from '../../mobx/components/RegisterFormStore';
import { withRouter } from 'react-router';
import { IPageProps } from '../../interfaces/components';
import { observer, inject } from 'mobx-react';
import Layout from '../stateless/Layout';

@inject('currentUser')
@inject('msg')
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
            <Layout>
                <RegisterFormWithMobx store={registerFormStore} redirectSuccess={this.redirectSuccess} />
            </Layout>
        )
    }
    
}

export default withRouter(Register as any);