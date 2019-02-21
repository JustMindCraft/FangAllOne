import React from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import ProductsAdminWithMobx from '../../withMobx/ProductsAdminWithMobx';
import productsAdmin from '../../../mobx/components/ProductsAdmin';

class ProductsAdminPage extends React.Component{
    render(){
        return (
            <LayoutWithMobx>
            <h1>商品管理</h1>
            <ProductsAdminWithMobx store={productsAdmin}/>
           </LayoutWithMobx>
        )
    }
}

export default ProductsAdminPage;
