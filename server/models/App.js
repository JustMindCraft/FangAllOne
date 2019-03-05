export default  (sequelize, DataTypes) => { 
    const App = sequelize.define('apps', {
        name: {
            type: DataTypes.STRING(),
        },
        isDefault: {
            type: DataTypes.BOOLEAN(),
            defaultValue: false,
        },
        host: {
            type: DataTypes.STRING,
            defaultValue: 'localhost:3000',
        },
        appId: {
            type: DataTypes.STRING,
            unique: true,
            defaultValue: require('uuid/v4')(),
        },
        secrect: {
            type: DataTypes.STRING,
            unique: true,
            defaultValue: require('uuid/v4')(),
        }, 
       
    })
    App.associate = models => {
        App.hasMany(models.User);
        App.hasMany(models.Role);
        App.hasMany(models.Shop);
        App.hasOne(models.HomeBanner);
        App.hasOne(models.Setting);
    }
    App.countDefault = async function(){
        //获得默认app数量
        return this.findOne({
            attributes: { include: [[sequelize.fn('COUNT', sequelize.col('isDefault')), "default"]] }
        });
    }
    
    return App;
};
