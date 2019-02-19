import React from 'react';


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
                ProductsAdminWithMobx
            </div>
        )
    }
}

export default ProductsAdminWithMobx;