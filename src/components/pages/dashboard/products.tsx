import React from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import ProductsAdminWithMobx from '../../withMobx/ProductsAdminWithMobx';
import productsAdmin from '../../../mobx/components/ProductsAdmin';

class ProductsAdminPage extends React.Component{
    render(){
        return (
            <LayoutWithMobx>
            <h1>商品管理</h1>
            <div style={{width:'80%',padding:'5px',display:'flex',justifyContent: "center",borderRadius:'10px'}}>
            <div style={{padding:'5px',width:'80%'}}>
            <ProductsAdminWithMobx store={productsAdmin}/>
            </div>


            </div>
           </LayoutWithMobx>
        )
    }
}

export default ProductsAdminPage;
