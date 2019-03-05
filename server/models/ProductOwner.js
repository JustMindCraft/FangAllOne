export default  (sequelize, DataTypes) => { 

    const ProductOwner = sequelize.define('product_onwers', {
       
        trigger: {
            type: DataTypes.JSON,
        },
       
    });
    
    ProductOwner.associate = models => {
        ProductOwner.belongsTo(models.Product);
        ProductOwner.belongsTo(models.User);
    }

    return Shop;
}


