//商品分类
export default  (sequelize, DataTypes) => { 

    const Tag =   sequelize.define('tags', {
        name: {
            type: DataTypes.STRING,
        }
    });

    Tag.associate = models => {
        Tag.belongsTo(models.App);
        Tag.belongsToMany(models.Post, {through: models.PostTag});
        Tag.belongsToMany(models.Product, {through: models.ProductTag});
    }
    

    return Tag;

};

