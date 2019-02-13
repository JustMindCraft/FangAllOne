import React, { Component } from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import ImageUploader from '../../withMobx/ImageUploader';
import homeBannerStore from '../../../mobx/components/HomeBannerStore';


class HomeBanner extends Component {
    constructor(props:any) {
        super(props);
        
    }
   

    render(){
        return (
            <LayoutWithMobx>
               <h1>轮播图设置</h1>
                <ImageUploader store={homeBannerStore}/>


            </LayoutWithMobx>
        )
    }
}

export default HomeBanner;