import React from 'react';
import { IPageProps } from '../../../interfaces/components';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import ProductsAdminWithMobx from '../../withMobx/ProductsAdminWithMobx';
import productsAdmin from '../../../mobx/components/ProductsAdmin';
import { withRouter } from 'react-router';
class ProductsAdminPage extends React.Component<IPageProps>{
    redirectSuccess = (isSuccess:any) => {
        const { history } = this.props;
        if(isSuccess){
            history.push('/dashboard');
        
        }
        
    }

    render(){
        return (
            <LayoutWithMobx>
            <h1>商品管理</h1>
            <div style={{width:'80%',padding:'5px',display:'flex',justifyContent: "center",borderRadius:'10px'}}>
            <div style={{padding:'5px',width:'80%'}}>
            <ProductsAdminWithMobx store={productsAdmin} redirectSuccess={this.redirectSuccess}/>
            </div>


            </div>
           </LayoutWithMobx>
        )
    }
}

export default (withRouter(ProductsAdminPage as any))