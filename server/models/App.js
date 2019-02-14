export default  (sequelize, DataTypes) => { 
    const App = sequelize.define('app', {
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
        }
    })
    App.associate = models => {
        App.hasMany(models.User);
        App.hasMany(models.Role);
        App.hasMany(models.Shop);
        App.hasOne(models.HomeBanner, {as: 'Banner'});
        App.hasOne(models.Setting, {as: 'Setting'});
    }
    App.countDefault = async function(){
        return this.findOne({
            attributes: { include: [[sequelize.fn('COUNT', sequelize.col('isDefault')), "default"]] }
        });
    }
    
    return App;
};
