import React from 'react';
import { withStyles, TextField } from '@material-ui/core';
import pageStyles from './pageStyle';
import { IPageProps } from '../../interfaces/components';
import LayoutWithMobx from '../withMobx/LayoutWithMobx';
import HomeImgWithMobx from '../withMobx/HomeImgWithMobx';
import homeBannerStore from '../../mobx/components/HomeBannerStore';

const Home = (props:IPageProps) => {
    const {classes} = props;
     
    return (
        <LayoutWithMobx>
            <div>
            <h1>首页</h1>
            </div>
            <div style={{width:'100%'}}>
                <HomeImgWithMobx store={homeBannerStore}/>
             
            </div>
           
           
        </LayoutWithMobx>
    )
}

export default withStyles(pageStyles)(Home);