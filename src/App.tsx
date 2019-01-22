import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { IAppProps } from './interfaces/components';
import { observer, Provider } from "mobx-react"
import Home from './components/pages/home';
import NotFound from './components/pages/notFound';
import Dashboard from './components/pages/dashboard';
import Register from './components/pages/register';
import login from './components/pages/login';
import currentUser from './mobx/global/UserSession';

@observer
class App extends Component<IAppProps> {
 
  render() {
    return (
      <div className="App">
      <Provider currentUser={currentUser}>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={login} />
              <Route  component={NotFound} />
            </Switch>
        </Router>
      </Provider>

      </div>
    );
  }
}

export default App;
