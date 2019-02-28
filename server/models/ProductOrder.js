//商品分类
export default  (sequelize) => { 

    const ProductOrder =   sequelize.define('product_orders');
    return ProductOrder;

};

