import React from 'react';
import ProductsAdminForm from '../stateless/ProductsAdminForm';

interface ProductsAdminWithMobxProps {
    store: any,
}

class ProductsAdminWithMobx extends React.Component<ProductsAdminWithMobxProps>{
    componentDidMount(){
        const { store } = this.props;
    }
    render (){
        return (
            <div>
                <ProductsAdminForm/>
            </div>
        )
    }
}

export default ProductsAdminWithMobx;