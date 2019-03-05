//商品分类
export default  (sequelize, DataTypes) => { 

    const ProductCategory =   sequelize.define('product_categories', {
        name: DataTypes.STRING,
    });

    ProductCategory.associate = models => {
        ProductCategory.hasMany(models.Product);
        ProductCategory.belongsTo(models.Shop);
    }
    

    return ProductCategory;

};

