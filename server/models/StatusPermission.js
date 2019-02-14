import sequelize  from "../db";
import Sequelize from 'sequelize';

const StatusPermission = sequelize.define('status_permissions', {
    modelName: {
        type: Sequelize.STRING,
        unique: true,
    },
    preStatus: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    nextStatus: {
        type: Sequelize.STRING,
        defaultValue: '',
    },
    
});



export default StatusPermission;