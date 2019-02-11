
export default  (sequelize) => { 

    const UserRole =   sequelize.define('user_roles');

    UserRole.countUsers = function(roleId){
        return this.findOne({
            attributes: { include: [[sequelize.fn('COUNT', sequelize.col('roleId')), "countUsers"]] },
            where: { roleId }
        });
    }

    return UserRole;

};

