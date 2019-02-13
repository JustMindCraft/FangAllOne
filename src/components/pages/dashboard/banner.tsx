import React, { Component } from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import ImageUploader from '../../withMobx/ImageUploader';

class HomeBanner extends Component {
    constructor(props:any) {
        super(props);
        
    }
   

    render(){
        return (
            <LayoutWithMobx>
               <h1>轮播图设置</h1>
                <ImageUploader/>


            </LayoutWithMobx>
        )
    }
}

export default HomeBanner;