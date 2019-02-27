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
        Product.belongsTo(models.ProductSpecification);//这个唯一性标示当前产品使用了哪一个种规格
        Product.hasMany(models.ProductProperty);
        Product.belongsTo(models.ProductCategory);
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


    Product.createDisCountCoupon = function(couponName, shop, discount, products){
        //创建折扣优惠券

    }

    Product.createDeduction = function(couponName, shop, deduction, products){
        //创建代金优惠券
    }


    return Product;
}


