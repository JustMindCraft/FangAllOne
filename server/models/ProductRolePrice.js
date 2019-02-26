export default  (sequelize, DataTypes) => { 

    const ProductRolePrice = 
    sequelize.define('product_specifications', {
        //这个模型描述不同角色对于同一个商品的能够购买的最终价格
        discount: {
            //使用折扣券的用户
            type: DataTypes.INTEGER,
            defaultValue: 100
        },
        deduction: {
            //使用抵扣券的用户
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    });

    ProductRolePrice.associate = models => {
        ProductRolePrice.belongsTo(models.Product);
        ProductRolePrice.belongsTo(models.Role);
    }
    return ProductSpecification;
}


