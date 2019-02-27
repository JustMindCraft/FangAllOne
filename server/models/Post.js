//商品分类
export default  (sequelize, DataTypes) => { 

    const Post =   sequelize.define('posts', {
        title: {
            type: DataTypes.STRING,
            defaultValue: '未命名标题',
        },
        body: {
            type: DataTypes.TEXT,
            defaultValue: "未添加内容"
        }
    });

    Post.associate = models => {
        Post.belongsTo(models.User);
        Post.belongsToMany(models.Tag, {through: models.PostTag});
    }
    

    return Post;

};

