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
        uuid: {
            type: DataTypes.STRING,
            unique: true,
            defaultValue: require('uuid/v4')(),
        }
    })
    App.associate = models => {
        App.hasMany(models.User);
        App.hasMany(models.Role);
        App.hasOne(models.HomeBanner, {as: 'Banner'});
    }
    App.countDefault = async function(){
        return this.findOne({
            attributes: { include: [[sequelize.fn('COUNT', sequelize.col('isDefault')), "default"]] }
        });
    }
    return App;
};
