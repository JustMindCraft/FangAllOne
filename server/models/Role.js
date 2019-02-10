
export default  (sequelize, DataTypes) => { 

    const Role = sequelize.define('role', {
        name: {
            type: DataTypes.STRING(),
        }
        
    });
    Role.sync();

    return Role;
};

