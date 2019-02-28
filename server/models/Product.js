import { ProductSpecification, Role } from ".";

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
            defaultValue: 0,
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
        },
        isTool: {
            //是否是工具类别，如果是的，新建相关角色
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isBook: {
            //是否是订购
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        bookPeriod: {
            //订购周期，默认为１天，就是说这个产品是１天后要续费
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
        
    });

    Product.associate = models => {
        Product.belongsTo(models.Shop);
        Product.hasMany(models.ShopAgencyProduct);
        Product.hasMany(models.ProductSpecification);
        Product.belongsTo(models.ProductSpecification);
        //这个唯一性标示当前产品使用了哪一个种规格
        Product.hasMany(models.ProductProperty);
        Product.hasMany(models.ProductStoreRecord);
        Product.belongsTo(models.ProductCategory);
        Product.belongsToMany(models.Order, {through: models.ProductOrder});
        Product.belongsToMany(models.Tag, {through: models.ProductTag});
    }

    Product.createCard = async function(
        cardName, cardDescription, cardCover, cardImages, shop, price, cardLevelProfits,
    ){

        //创建会员卡片
         await shop.update({
             cardLevel: shop.cardLevel+1,
         })

         const app = await shop.getApp();

         const role = await Role.create({
            name: cardName+"持有者"
         });

         await role.setApp(app);

         const newCard = await this.create({
            name: cardName,
            description: cardDescription,
            cover: cardCover,
            images: cardImages,
            isCard: true,
            shopId: shop.id,
            cardLevelProfits,
            cardLevel: shop.cardLevel+1
         });

         await newCard.setShop(shop);

         const newProductSpecification = await ProductSpecification.create({
             price,
         })

         await newProductSpecification.setProduct(newCard);

         return newCard;
         
    }


    Product.createSoftWare = function(appName, shopName, host, user){
        //创建软件商品
        
    }


    Product.createDiscountCoupon = function(couponName, shop, discount, products){
        //创建折扣优惠券

    }

    Product.createDeduction = function(couponName, shop, deduction, products){
        //创建代金优惠券
    }

    


    return Product;
}


