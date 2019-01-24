import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';

interface IAppContainerProps{
    currentUser: any
}

@inject('currentUser')
@observer
class AppContainer extends Component<IAppContainerProps> {
    componentWillMount(){
        this.checkLogined();
      }
      
    componentDidMount(){
    setInterval(()=>{
        this.checkLogined()
    }, 1500);
    
    }
    checkLogined(){
        this.props.currentUser.checkLogined();
    }
    render(){
       
        return (
            <div className="App">
            {this.props.children}
            </div>
        )
    }
}


export default  withRouter(AppContainer as any);