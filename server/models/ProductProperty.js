export default  (sequelize, DataTypes) => { 

    const ProductProperty = 
    sequelize.define('product_properties', {
        name: {
            type: DataTypes.STRING,
            defaultValue: "默认属性"
        },
        value: {
            type: DataTypes.INTEGER,
            defaultValue: "",
        },
    });

    ProductProperty.associate = models => {
        ProductProperty.belongsTo(models.Product);
    }
    return ProductProperty;
}


