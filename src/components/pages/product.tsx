import React from 'react';
import LayoutWithMobx from '../withMobx/LayoutWithMobx';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductShowWithMobx from '../withMobx/ProductShowWithMobx';
import product from '../../mobx/models/Product';


const ProductPage  = () => {
    return (
        <LayoutWithMobx>
             <ProductShowWithMobx product={product} />
            
        </LayoutWithMobx>
    )
}


export default ProductPage;