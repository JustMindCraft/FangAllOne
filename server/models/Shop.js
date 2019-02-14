export default  (sequelize, DataTypes) => { 

    const Shop = sequelize.define('shops', {
       
        name: {
            type: DataTypes.STRING,
        },
        isDefault: {
            type: DataTypes.BOOLEAN,
        }
    });

    Shop.associate = models => {
        Shop.belongsTo(models.App);
        Shop.hasMany(models.Product);
        Shop.hasMany(models.ShopAgencyProduct);
    }
    return Shop;
}


