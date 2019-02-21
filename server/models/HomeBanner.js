export default  (sequelize, DataTypes) => { 

    const HomeBanner = sequelize.define('home_banners', {
        images: {
            type: DataTypes.JSON,
            defaultValue: [],
        },
        imageLinks: {
            type: DataTypes.JSON,
            defaultValue: [],
        }
    });

    HomeBanner.associate = models => {
        HomeBanner.belongsTo(models.App);
    }



    return HomeBanner;
}
