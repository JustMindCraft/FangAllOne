import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { IPageProps } from '../../interfaces/components';
import Typography from '@material-ui/core/Typography';
import LayoutWithMobx from '../withMobx/LayoutWithMobx';

class Dashboard extends Component<IPageProps> {
    state = { visible: false }

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })
    render(){
        return (
            <LayoutWithMobx>
                    <Typography component="h2" variant="h4" gutterBottom>
                    控制面板
                    </Typography>
                    
                    
            </LayoutWithMobx>

        )
    }
    
}

export default withRouter(Dashboard as any);