export default (sequelize, DataTypes)=>{

    const StatusPermission = sequelize.define('status_permissions', {
        
        modelName: {
            type: DataTypes.STRING,
            unique: true,
        },
        preStatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        nextStatus: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        granted: {
            type: DataTypes.STRING,
            defaultValue: false,
        }
    });

    return StatusPermission;
}

