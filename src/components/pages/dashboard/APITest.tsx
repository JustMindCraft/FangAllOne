import React from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import APITestWithMobx from '../../withMobx/APITestWithMobx';
import { Provider } from 'mobx-react';
import dataContainer from '../../../mobx/DataContainer';


const APITest  = () => {
    return (
        <LayoutWithMobx>
           
                <br/>
                <h1>数据列表测试</h1>
                <br/>
            <Provider dataContainer={dataContainer}>
                <APITestWithMobx />
           </Provider>
        </LayoutWithMobx>
    )
}


export default APITest;