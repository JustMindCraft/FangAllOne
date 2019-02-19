export default  (sequelize, DataTypes) => { 

    const ProductSpecification = 
    sequelize.define('product_specifications', {
        name: {
            type: DataTypes.STRING,
            defaultValue: "默认规格"
        },
        price: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    });

    ProductSpecification.associate = models => {
        ProductSpecification.belongsTo(models.Product);
    }
    return ProductSpecification;
}


