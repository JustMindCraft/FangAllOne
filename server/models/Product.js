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
        },
        limitForEachUser: {
            //限制每个用户购买的数量，-1代表不限制
            type: DataTypes.INTEGER,
            defaultValue: -1,
        },
        storage: {
            //库存
            type: DataTypes.INTEGER,
            defaultValue: -1,
        },
        storageUnit: {
            //库存单位
            type: DataTypes.STRING,
            defaultValue: '件',
        }
        
    });

    Product.associate = models => {
        Product.belongsTo(models.Shop);
        Product.hasMany(models.ShopAgencyProduct);
        Product.hasMany(models.ProductSpecification);
        Product.hasMany(models.ProductProperty);
        Product.belongsTo(models.ProductCategory);
    }

    Product.createCard = async function(
        cardName, cardDescription, cardCover, cardImages, shop
    ){
        
         const newCard = await this.create({
            name: cardName,
            description: cardDescription,
            cover: cardCover,
            images: cardImages,
            isCard: true,
            shopId: shop.id,
            cardLevel: shop.cardLevel+1
         });
         
         await shop.update({
             cardLevel: shop.cardLevel+1,
         })

         return newCard;
         
    }


    return Product;
}


