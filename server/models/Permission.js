export default  (sequelize, DataTypes) => { 

    const Permission = sequelize.define('permissions', {
        name: {
            type: DataTypes.STRING,
        },
        value: {
            type: DataTypes.STRING,
        },
        granted: {
            //通过或者拒绝角色们的通过
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
        
    });

    Permission.associate = models => {
        Permission.belongsToMany(models.Role, {through: models.RolePermission});
    }
    Permission.check = function(roles){

        //检查一组角色是否被授权；
        

    }

    return Permission;
}

