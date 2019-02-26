import Sequelize from 'sequelize';
import config from '../config';



const ENV = process.env.NODE_ENV;

const dbConfig = config[ENV].db;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});

export const App = sequelize.import(__dirname+'/App.js');
export const User =  sequelize.import(__dirname+'/User.js');
export const Role =  sequelize.import(__dirname+'/Role.js');
export const UserRole =  sequelize.import(__dirname+'/UserRole.js');
export const HomeBanner =  sequelize.import(__dirname+'/HomeBanner.js');
export const Shop =  sequelize.import(__dirname+'/Shop.js');
export const Product =  sequelize.import(__dirname+'/Product.js');
export const ShopAgencyProduct =  sequelize.import(__dirname+'/ShopAgencyProduct.js');
export const Setting =  sequelize.import(__dirname+'/Setting.js');
export const ProductSpecification =  sequelize.import(__dirname+'/ProductSpecification.js');
export const ProductProperty =  sequelize.import(__dirname+'/ProductProperty.js');
export const Permission =  sequelize.import(__dirname+'/Permission.js');
export const RolePermission =  sequelize.import(__dirname+'/RolePermission.js');
export const ProductCategory =  sequelize.import(__dirname+'/ProductCategory.js');


const models = {
    User,
    Role,
    UserRole,
    HomeBanner,
    Shop,
    Product,
    ShopAgencyProduct,
    Setting,
    App,
    ProductSpecification,
    ProductProperty,
    Permission,
    RolePermission,
    ProductCategory
}

for (const model in models) {
    if (models.hasOwnProperty(model)) {
        const element = models[model];
        if(element.associate){
            element.associate(models);
        }
        element.sync();
        
    }
}

export default models;




