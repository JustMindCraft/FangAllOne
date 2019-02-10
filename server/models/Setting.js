import sequelize from "../db";
import Sequelize from 'sequelize';

const Setting = sequelize.define('setting', {
    APPID: {
        type: Sequelize.STRING,
        unique: true,
    },
    isSMSLogin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    SMS_API_KEY: {
        type: Sequelize.STRING,
        defaultValue: '',
    },
    SMS_URI: {
        type: Sequelize.STRING,
        defaultValue: "",
    },
    isReigsterRequireMobile: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isReigsterRequireEmail: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
});



export default Setting;