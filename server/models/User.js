import { sequelize } from "../db";
import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';
import assert from 'assert';

const User = sequelize.define('user', {
    username: {
      type: Sequelize.STRING, unique: true
    },
    password: {
      type: Sequelize.STRING
    }
});
User.sync({force: true}).then(() => {
    console.log('User model create');
    
});

User.register = async function(username, password){
    const salt = bcrypt.genSaltSync(Math.random(10));
    console.log(salt);
    console.log(password);
    
    const cryptoPassword = bcrypt.hashSync(password, salt);
    console.log(cryptoPassword);
    
    try {
        return await this.create({
            username,
            password: cryptoPassword
        })
    } catch (error) {
       assert.fail(error);
       return error;
        
    }
};

User.checkUsernameExist = async function(username){
    const user = await this.findOne({where: {username}});
    if(user){
        return true;
    }
    return false;
}

User.auth = async function(username, password){
    try {
        const user = await this.findOne({where: {username}});
        if(user.password){
            return bcrypt.compareSync(password, user.password);
        }
        else{
            return false
        } 
    } catch (error) {
        assert.fail(error)
        return error;
    }
   
}

export default  User;
  
 