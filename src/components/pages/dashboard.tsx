import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';
import { IPageProps } from '../../interfaces/components';

@inject('currentUser')
@observer
class Dashboard extends Component<IPageProps> {
    componentDidMount(){
        
    }
    render(){
        console.log(this.props);
        
        return (
            <h1>面板</h1>

        )
    }
    
}

export default withRouter(Dashboard as any);