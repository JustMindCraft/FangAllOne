import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import currentUser from './mobx/global/UserSession';
import {  Provider } from "mobx-react"
import informationMsg from './mobx/global/InformationMsg';
import app from './mobx/global/App';

ReactDOM.render(
    <Provider currentUser={currentUser} msg={informationMsg} app={app}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
