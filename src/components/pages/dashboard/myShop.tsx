import React, { Component } from 'react';
import MyShopWithMobx from '../../withMobx/MyShopWithMobx';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';

class MyShop extends React.Component {
    constructor(props:any) {
        super(props);
        
    }
   

    render(){
        return (
            <LayoutWithMobx >
            <div style={{width:'100%',background:'#f0f2f5',padding:'5px'}}>
               <div style={{width:'80%'}}>

               <MyShopWithMobx store={1}/>

               </div>
            </div>
               


            </LayoutWithMobx>
        )
    }
}

export default MyShop;