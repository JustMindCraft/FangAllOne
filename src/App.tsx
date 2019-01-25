import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { IAppProps } from './interfaces/components';
import Home from './components/pages/home';
import NotFound from './components/pages/notFound';
import Dashboard from './components/pages/dashboard';
import Register from './components/pages/register';
import login from './components/pages/login';
import { inject, observer } from 'mobx-react';
import InformationMsgWithMobx from './components/withMobx/InformationMsgWithMobx';
import UserAdmin from './components/pages/dashboard/users';
import Personal from './components/pages/personal';


interface IPrivateRouteProps {
  msg:any, auth:boolean, exact:boolean, path:any,
  component: any,
}

class PrivateRoute extends Component<IPrivateRouteProps> {
  componentDidMount(){
    const { msg, auth  } = this.props;
    if(!auth){
      msg.show("请先登录")
    }
  }
  render(){
    const { auth, exact, path, component  } = this.props;
    if(auth){
      return <Route auth={auth} exact={exact} path={path} component={component} />
    }else{
      return <Redirect to="/login"/>
    }
    
  }
 
}

@inject('msg')
@inject('currentUser')
@observer
class App extends Component<IAppProps> {
  
  componentWillMount(){
    this.checkLogined();
  }
  
  componentDidMount(){
    setInterval(()=>{
      this.checkLogined()
    }, 1500);
    
    
  }
  checkLogined(){
    const { currentUser } = this.props;
    currentUser.checkLogined();
  }
  componentWillUpdate(){
    const {  currentUser, msg } = this.props;
    if(!currentUser.isLogined){
      msg.show("您已登出");
    }
  }

  render() {
    const { currentUser, msg } = this.props;
    let auth = false;
    if(currentUser.isLogined){
      //auth要在此重新定义，这样render才能重新渲染，这样PrivateRoute才能执行
      auth =true;
    }    
    
    return (
      <div style={{height:"100%"}}>
      <InformationMsgWithMobx />
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute msg={msg} auth={auth} exact path="/dashboard" component={Dashboard} />
              <PrivateRoute msg={msg} auth={auth} exact path="/dashboard/users" component={UserAdmin} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/personal" component={Personal} />
              <Route exact path="/login" component={login} />
              <Route  component={NotFound} />
            </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App as any;
