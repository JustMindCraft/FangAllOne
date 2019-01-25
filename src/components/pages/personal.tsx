import React, {Component} from 'react';
import PcTopWithMobx from '../withMobx/PcTopWithMobx';
import PcFooter from '../stateless/PcFooter';
import ImageUploader from '../withMobx/ImageUploader';

export default class Personal extends Component{
    render(){
        return(
            <div className="App-page">
                <ImageUploader />
                <PcTopWithMobx />
                    <h1>个人中心</h1>
                    
                <PcFooter />
            </div>
        )
    }
}