export default  (sequelize, DataTypes) => { 

    const Permission = sequelize.define('permissions', {
        name: {
            type: DataTypes.STRING,
        },
        value: {
            type: DataTypes.STRING,
        },
        granted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
        
    });

    Permission.associate = models => {
        Permission.belongsTo(models.Role);
    }

    return Permission;
}





export default Permission;