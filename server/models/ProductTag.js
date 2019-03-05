//商品分类
export default  (sequelize) => { 

    const ProductTag =   sequelize.define('product_tags');

    return ProductTag;

};

