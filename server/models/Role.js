export default  (sequelize, DataTypes) => { 

    const Role = sequelize.define('roles', {
        name: {
            type: DataTypes.STRING(),
        },
        
    });
    Role.associate = models => {
        Role.belongsTo(models.App);
        Role.belongsToMany(models.User, {through: models.UserRole});
        Role.belongsToMany(models.Permission, {through: models.RolePermission});
        Role.hasMany(models.StatusPermission);

    }
    Role.countInApp = function(name, appId){
        return this.findOne({
            attributes: { include: [[sequelize.fn('COUNT', sequelize.col('name')), "countName"]] },
            where: { name, appId }
        });
    }



    return Role;
};

