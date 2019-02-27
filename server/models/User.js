import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';
import assert from 'assert';

const Op = Sequelize.Op;

export default (sequelize, DataTypes)=>{

    const User = sequelize.define('users', {
        username: {
          type: DataTypes.STRING(), unique: true
        },
        mobile: {
            type: DataTypes.STRING(), unique: true
        },
        email: {
            type: DataTypes.STRING(), unique: true
        },
        password: {
          type: DataTypes.STRING()
        }, 
        status: {
            type: DataTypes.STRING()
        },
        passwordSettedByUser: {//密码是否是用户设置的
            type: DataTypes.BOOLEAN(),
            defaultValue: false,
        }
    });

    User.associate = models => {
        User.belongsTo(models.App);
        User.belongsToMany(models.Role, {through: models.UserRole});
        User.hasMany(models.Contact);
        User.hasMany(models.Post);
        User.hasOne(models.Balance);

    }

    User.register = async function(username, password, mobile){
        const salt = bcrypt.genSaltSync(Math.random(10));
        const cryptoPassword = bcrypt.hashSync(password, salt);
        try {
            return await this.create({
                username,
                password: cryptoPassword,
                mobile,
            })
        } catch (error) {
           assert.fail(error);
           return error;
            
        }
    };

    User.updateProfile = async function(userParams){
        try {
            return await this.update({
              ...userParams
            })
        } catch (error) {
           assert.fail(error);
           return error;
            
        }
    }

    User.prototype.resetPassword = async function(password){
        const salt = bcrypt.genSaltSync(Math.random(10));
        const cryptoPassword = bcrypt.hashSync(password, salt);
        try {
            return await this.update({
                password: cryptoPassword,
            })
        } catch (error) {
           assert.fail(error);
           return error;
            
        }
    }
    
    User.checkUsernameExist = async function(username){
        const user = await this.findOne({where: {username}});
        if(user){
            return true;
        }
        return false;
    }
    
    
    
    User.auth = async function(username, password, model, appId){
        try {
            const user = await this.findOne({where: {
                appId,
                [Op.or]: 
                [
                    {username}, 
                    {mobile: username},
                    {email: username}
                ]
            }});
            
            if(!user){
                return false
            }
            if(user.password){
                if(bcrypt.compareSync(password, user.password)){
                    return user;
                }
            }
            else{
                return false
            } 
        } catch (error) {
            assert.fail(error)
            return error;
        }
       
    }
    
    return  User;
      
     
}

