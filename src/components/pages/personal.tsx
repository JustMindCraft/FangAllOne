import React, {Component} from 'react';
import PcTopWithMobx from '../withMobx/PcTopWithMobx';
import PcFooter from '../stateless/PcFooter';
import ImageUploader from '../withMobx/ImageUploader';
import Layout from '../stateless/Layout';

export default class Personal extends Component{
    render(){
        return(
            <Layout>
                <PcTopWithMobx />
                <h1>个人中心</h1>
                <ImageUploader />
            </Layout>
        )
    }
}