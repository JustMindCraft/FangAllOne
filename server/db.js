import Sequelize from 'sequelize';
import config from './config';


const dbConfig = config[config.mode].db;

export const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
})
export default async function connectDB(){
    
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
}