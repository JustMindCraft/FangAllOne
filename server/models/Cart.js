
export default  (sequelize, dataType) => { 

    const Cart =   sequelize.define('carts', {
       shops: {
           type: dataType.JSON,
           defaultValue: []
       },
       shopProducts: {
           type: dataType.JSON,
           defaultValue: {}
       },
       productCount: {
            type: dataType.JSON,
            defaultValue: {}
       } 
    });


    Cart.associate = models => {
        Contact.belongsTo(models.User);
        Contact.belongsTo(models.App);
    }



    return Cart;

};

