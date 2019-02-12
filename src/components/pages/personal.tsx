import React, {Component} from 'react';
import Layout from '../stateless/Layout';
import LayoutWithMobx from '../withMobx/LayoutWithMobx';

export default class Personal extends Component{
    render(){
        return(
            <LayoutWithMobx>
                <h1>个人中心</h1>
            </LayoutWithMobx>
        )
    }
}