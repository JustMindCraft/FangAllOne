import Sequelize from 'sequelize';

export const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './database.sqlite'
})
export default function connectDB(){
    
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
}