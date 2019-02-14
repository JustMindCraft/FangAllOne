export default  (sequelize, DataTypes) => { 

    const Setting = sequelize.define('settings', {
       
        isSMSLogin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isEmailCodeLogin: {
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

        cloudinary: {
            type: DataTypes.JSON,
            defaultValue: {
                cloudName: 'ddycd5xyn',
                unsignedUploadPreset: 'rq6jvg1m',
            }
        }
        

    });

    Setting.associate = models => {
       Setting.belongsTo(models.App);
    }
    

    return Setting;
}
