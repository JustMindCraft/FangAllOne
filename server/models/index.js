import Sequelize from 'sequelize';
import config from '../config';
import registerModel from '../fang/register_model';


const dbConfig = config[config.mode].db;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});

export const App = registerModel(__dirname+'/App.js', sequelize);
export const User = registerModel(__dirname+'/User.js', sequelize);
export const Role = registerModel(__dirname+'/Role.js', sequelize);



