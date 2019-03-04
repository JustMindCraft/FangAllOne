export default  (sequelize, DataTypes) => { 

    const ShopAgencyProduct = 
    sequelize.define('shop_agency_products');


    ShopAgencyProduct.associate = models => {
        ShopAgencyProduct.belongsTo(models.Shop);
        ShopAgencyProduct.belongsTo(models.Product);
        ShopAgencyProduct.belongsTo(models.ShopAgencyProduct);
    }
    return ShopAgencyProduct;
}


