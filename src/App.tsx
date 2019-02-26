import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { IAppProps, IAppState } from './interfaces/components';
import Home from './components/pages/home';
import NotFound from './components/pages/notFound';
import Dashboard from './components/pages/dashboard';
import Register from './components/pages/register';
import LinearProgress from '@material-ui/core/LinearProgress';
import login from './components/pages/login';
import { inject, observer } from 'mobx-react';
import HomeBanner from './components/pages/dashboard/banner'
import Personal from './components/pages/personal';
import SettingPage from './components/pages/dashboard/setting';
import Shops from './components/pages/dashboard/shops'
import MyShop from './components/pages/dashboard/myShop'
import UserAdminPage from './components/pages/dashboard/users';
import WithdrawalAdminPage from './components/pages/dashboard/withdrawal';
import MembershipCardAdminPage from './components/pages/dashboard/membershipCard';
import RolesAdminPage from './components/pages/dashboard/roles';
import APITest from './components/pages/dashboard/APITest';


interface IPrivateRouteProps {
  msg: any, auth: boolean, exact: boolean, path: any,
  component: any,
}


function LoadApp() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      justifyItems: 'center',
      alignItems: "center",
      height: '100%',
      flexDirection: 'column'
    }}>
      <div>
        <LinearProgress variant="query" style={{ width: "200px" }} />
      </div>
      <div>
        <h4>应用载入中，请稍后</h4>
      </div>
      <div>
        <LinearProgress color="secondary" variant="query" style={{ width: "200px" }} />
      </div>

    </div>
  );
}

class PrivateRoute extends Component<IPrivateRouteProps> {
  componentDidMount() {
    const { msg, auth } = this.props;
    if (!auth) {
      msg.show("请先登录")
    }
  }
  render() {
    const { auth, exact, path, component } = this.props;
    if (auth) {
      return <Route auth={auth} exact={exact} path={path} component={component} />
    } else {
      return <Redirect to="/login" />
    }

  }

}

@inject('msg')
@inject('currentUser')
@inject('app')
@observer
class App extends Component<IAppProps, IAppState> {

  private timer: any;

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const { app, currentUser } = this.props;

    app.getAppInfo();
    currentUser.getUserInfo()
  }



  componentWillUpdate() {
    const { currentUser } = this.props;
    clearInterval(this.timer);
    if (currentUser.isLogined) {
      this.timer = setInterval(() => {
        currentUser.checkLogined();
      }, 1500);
    }
    if (!currentUser.isLogined) {
      clearInterval(this.timer);
    }

  }

  render() {
    const { currentUser, msg, app } = this.props;

    let auth = false;
    if (currentUser.isLogined) {
      //auth要在此重新定义，这样render才能重新渲染，这样PrivateRoute才能执行
      auth = true;
    }

    if (app.loading) {
      return <LoadApp />
    }

    return (
      <div style={{ height: "100%" }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute msg={msg} auth={auth} exact path="/dashboard" component={Dashboard} />
            <PrivateRoute msg={msg} auth={auth} exact path="/dashboard/banner" component={HomeBanner} />
            <PrivateRoute msg={msg} auth={auth} exact path="/dashboard/users" component={UserAdminPage} />
            <PrivateRoute msg={msg} auth={auth} exact path="/dashboard/settings" component={SettingPage} />
            <PrivateRoute msg={msg} auth={auth} exact path="/dashboard/membership_card" component={MembershipCardAdminPage} />
            <PrivateRoute msg={msg} auth={auth} exact path="/dashboard/withdrawal" component={WithdrawalAdminPage} />
            <PrivateRoute msg={msg} auth={auth} exact path="/dashboard/shops" component={Shops} />
            <PrivateRoute msg={msg} auth={auth} exact path="/dashboard/my_shop" component={MyShop} />
            <PrivateRoute msg={msg} auth={auth} exact path="/dashboard/roles" component={RolesAdminPage} />
            <PrivateRoute msg={msg} auth={auth} exact path="/dashboard/api_test" component={APITest} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute msg={msg} auth={auth} exact path="/personal" component={Personal} />
            <Route exact path="/login" component={login} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App as any;
