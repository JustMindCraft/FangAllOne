export default  (sequelize, DataTypes) => { 

    const Shop = sequelize.define('shops', {
       
        name: {
            type: DataTypes.STRING,
        },
        isDefault: {
            type: DataTypes.BOOLEAN,
        },
        cardLevel: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
    });

    Shop.associate = models => {
        Shop.belongsTo(models.App);
        Shop.hasMany(models.Product);
        Shop.hasMany(models.ShopAgencyProduct);
    }
    return Shop;
}


