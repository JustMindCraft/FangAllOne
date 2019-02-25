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
            <div style={{width:'100%',minHeight: '200px'}}>
                <HomeImgWithMobx store={homeBannerStore}/>
            </div>
            <div>
                产品列表
            </div>
            <div>
                文章列表
            </div>
        </LayoutWithMobx>
    )
}

export default withStyles(pageStyles)(Home);