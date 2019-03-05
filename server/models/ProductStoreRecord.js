export default  (sequelize, DataTypes) => { 

    const ProductStoreRecord = sequelize.define('product_store_records', {
        inOrOut: {
            type: DataTypes.STRING,
            defaultValue: 'in',//in 或者out 表示入库或者出库
        }, 
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        unit: {
            type: DataTypes.STRING,
            defaultValue: "件"
        }
       
    });
    
    ProductStoreRecord.associate = models => {
        ProductStoreRecord.belongsTo(models.Product);
        ProductStoreRecord.belongsTo(models.Shop);
    }

    return ProductStoreRecord;
}


