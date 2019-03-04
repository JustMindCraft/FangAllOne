import React from 'react';
import { withStyles, TextField } from '@material-ui/core';
import pageStyles from './pageStyle';
import { IPageProps } from '../../interfaces/components';
import LayoutWithMobx from '../withMobx/LayoutWithMobx';
import ProductCardListWithMobx from '../withMobx/ProductCardListWithMobx';
import { Provider } from 'mobx-react';
import dataContainer from '../../mobx/DataContainer';

const Home = (props:IPageProps) => {
     
    return (
        <LayoutWithMobx>
            {/* <div style={{width:'100%',minHeight: '200px'}}>
                <HomeImgWithMobx store={homeBannerStore}/>
            </div> */}
            <div style={{
                width:'100%'
                }}>
                <h1 style={{
                    textAlign: 'center'
                }}>主打产品</h1>
                <Provider dataContainer={dataContainer}>
                    <ProductCardListWithMobx />
                </Provider>
            </div>
            
            
        </LayoutWithMobx>
    )
}

export default withStyles(pageStyles)(Home);