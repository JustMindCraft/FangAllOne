import sequelize  from "../db";
import Sequelize from 'sequelize';

const Permission = sequelize.define('permission', {
    modelName: {
        type: Sequelize.STRING,
    },
    recordId: {
        type: Sequelize.STRING,
    },
    action: {
      type: Sequelize.BOOLEAN,
    },
    granted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
    
});


export default Permission;