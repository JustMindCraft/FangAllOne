export default  (sequelize, DataTypes) => { 

    const Product = sequelize.define('products', {
       
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        images: {
            type: DataTypes.JSON
        },
        cover: {
            type: DataTypes.STRING,
        },
        isDefault: {
            type: DataTypes.BOOLEAN,
        },
        isCard: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        cardLevel: {
            type: DataTypes.INTEGER,
            defaultValue: null,
        },
        cardLevelProfits: {
            type: DataTypes.JSON,
            defaultValue: [],
        }
        
    });

    Product.associate = models => {
        Product.belongsTo(models.Shop);
        Product.hasMany(models.ShopAgencyProduct);
        Product.hasMany(models.ProductSpecification);
        Product.hasMany(models.ProductProperty);


    }

    Product.createCard = function(cardName, cardDescription, cardCover, cardImages){

    }


    return Product;
}


