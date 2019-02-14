export default  (sequelize, DataTypes) => { 

    const Product = sequelize.define('products', {
       
        name: {
            type: DataTypes.STRING,
        },
        isDefault: {
            type: DataTypes.BOOLEAN,
        }
        
    });

    Product.associate = models => {
        Product.belongsTo(models.Shop);
        Product.hasMany(models.ShopAgencyProduct);

    }


    return Product;
}


