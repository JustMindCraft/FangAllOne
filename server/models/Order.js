
export default  (sequelize, dataType) => { 

    const Order =   sequelize.define('orders', {
        note: {
            type: dataType.STRING,
            default: '暂无备注'
        },
        cost: {
            type: dataType.INTEGER,
            default: 0,
        }
    });


    Order.associate = models => {
       Order.hasMany(models.Product);
       Order.belongsTo(models.User);
       Order.belongsTo(models.Shop);
    }

    Order.buy = function(user, products){
        
    }

    Order.prototype.pay = function(){
        
    }

    return Order;

};

