export default  (sequelize, DataTypes) => { 

    const Setting = sequelize.define('setting', {
       
        isSMSLogin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        SMS_API_KEY: {
            //if only isSMSLogin equal true
            type: DataTypes.STRING,
            defaultValue: '',
        },
        SMS_URI: {
            //if only isSMSLogin equal true

            type: DataTypes.STRING,
            defaultValue: "",
        },
        isReigsterRequireMobile: {
            //注册是否要手机号
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isReigsterRequireEmail: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        

    });
    return Setting;
}



export default Setting;