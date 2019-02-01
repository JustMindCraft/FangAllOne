import { sequelize } from "../db";
import Sequelize from 'sequelize';

const MobileSMS = sequelize.define('mobile_sms', {
    mobile: {
      type: Sequelize.STRING,
    },
    sms: {
      type: Sequelize.STRING
    }
});
MobileSMS.sync({force: true}).then(async () => {
    
});


MobileSMS.setSMS = async function(mobile=""){
    await this.destroy({where: {mobile}});
    await this.create({mobile, sms: '1234'});
    return setTimeout(()=>{
        this.destroy({where: {mobile}});
    }, 30*1000*60);//验证码30分钟内有效
}

MobileSMS.validSMS = async function(mobile="", sms=""){
    const sms = await this.findOne({where: {mobile, sms}});
    return  !sms? false : true;
}


export default MobileSMS;