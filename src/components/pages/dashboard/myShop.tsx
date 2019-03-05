import React, { Component } from 'react';
import MyShopAdminWithMobx from '../../withMobx/MyShopAdminWithMobx';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import { withStyles, TextField } from '@material-ui/core';
import pageStyles from '../pageStyle';
import { IPageProps } from '../../../interfaces/components';


class MyShopAdminPage extends React.Component<IPageProps>  {
    constructor(props:any) {
        super(props);
        
    }
   

    render(){
        return (


            <LayoutWithMobx >
            <div style={{width:'100%'}}>
                <div style={{padding:'5px',display:'flex',justifyContent:'center'}}>
               <MyShopAdminWithMobx store={1}/>
               </div>
            </div>
               

            </LayoutWithMobx>

        )
    }
}

export default withStyles(pageStyles)(MyShopAdminPage);