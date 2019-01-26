import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { IPageProps } from '../../interfaces/components';
import PcFooter from '../stateless/PcFooter';
import PcTopWithMobx from '../withMobx/PcTopWithMobx';
import BackendLayout from '../withMobx/BackendLayout';
import Typography from '@material-ui/core/Typography';
import Layout from '../stateless/Layout';

class Dashboard extends Component<IPageProps> {
    state = { visible: false }

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })
    render(){
        const { visible } = this.state
        return (
            <Layout>
                <BackendLayout title="控制面板">
                    <Typography component="h2" variant="h4" gutterBottom>
                    控制面板
                    </Typography>
                    
                </BackendLayout>
                    
            </Layout>

        )
    }
    
}

export default withRouter(Dashboard as any);