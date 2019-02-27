
export default  (sequelize, dataType) => { 

    const Contact =   sequelize.define('contacts', {
        mobile: {
            type: dataType.STRING,
            default: '暂无备注'
        },
        address: {
            type: dataType.STRING,
            default: '暂无备注'
        }
    });


    Contact.associate = models => {
        Contact.hasMany(models.Order);
        Contact.belongsTo(models.User);
    }



    return Contact;

};

