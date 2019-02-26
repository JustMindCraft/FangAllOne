import { UserRole } from '.';
import ProductRolePrice from './ProductRolePrice';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

const Pay = require('@sigodenh/wechatpay');
// var pfxContent = fs.readFileSync("<location-of-your-apiclient-cert.p12>")
const wechatPay = new Pay("", "", "");
export default  (sequelize, dataType) => { 

    const Order =   sequelize.define('orders', {
        //订单是面向店铺，用户的支付订单需求在于合并此类订单
        note: {
            type: dataType.STRING,
            default: '暂无备注'
        },
        cost: {
            type: dataType.INTEGER,
            default: 0,
        },
        orderNumber: {
            //这是面向店铺的订单号
            type: dataType.STRING,
            default: ((new Date()).getTime()+Math.random()*1000).toString()
        },
        paymentNumber: {
            //这是暴露给支付方式的订单号，几张订单可能使用一个订单号，所以这个字段也可以帮助用户合并一起支付掉的订单
            type: dataType.STRING,
            default: '1234'
        },
        status: {
            type: dataType.STRING,
            default: "未确认",
            //设置了配送地址后，订单才能被确认.
        }
    });


    Order.associate = models => {
       Order.hasMany(models.Product);
       Order.belongsTo(models.User);
       Order.belongsTo(models.Shop);
       Order.belongsTo(models.Contact);
    }

    Order.buy = async function(user, products, shopId, productsCount, note, paymentNumber){
        //目前是草稿
        let totalCost = 0;
        const productDiscount = {};//存储产品的折扣情况；
        const roles = await user.getRoles();
        const productRolePrices = await  ProductRolePrice.findAll({where: {[Op.or]: roles.concat(products)}});

        for(let j = 0; j < productRolePrices.length; j++)
        {
            //开始获取产品折扣情况
            const productRolePrice = productRolePrices[j];
            productDiscount[productRolePrice.productId] = {
                discount: productRolePrice.discount, //折扣
                deduction: productRolePrice.deduction, //抵扣
            }
            
        }
           

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            if(product.shopId !==shopId){
                return "请传入同一个店铺的商品, 每个订单只有一个店铺关联";
            }
            const { price } = await product.getProductSpecification();
            //获取一个产品规格的价格
            const count = productsCount[product.id];
            //获取产品购买的数量

            const promotion = productDiscount[product.id]; //获取优惠信息
            //计算总价格
            const productsPrice = price*count*promotion.discount- promotion.deduction;

            totalCost = totalCost + productsPrice;
        }

        try {
            return await this.create({
                note,
                paymentNumber,
                cost: totalCost,
            })
            
        } catch (error) {
            return error;
        }

        

    }

    Order.prototype.wechatPay = async function(tradeType, body, ip, openid){
        switch (tradeType) {
            case "JSAPI":
                try {
                    return await wechatPay.unifiedOrder({
                        body: body,
                        out_trade_no: this.orderNumber,
                        total_fee: order.cost,
                        spbill_create_ip: ip,
                        notify_url: 'https://example.com/wechatpay/notify',
                        trade_type: 'JSAPI',
                        openid,
                    });
                } catch (error) {
                    return error;
                }
        
            default:
                return 'tradeType微信支付类型错误'
        }
    }

    return Order;

};

