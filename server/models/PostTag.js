//商品分类
export default  (sequelize) => { 

    const PostTag =   sequelize.define('post_tags');

    return PostTag;

};

