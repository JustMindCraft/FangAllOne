import Joi from 'joi';
import { App, Role } from '../../models/';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;


export default [
  //==============GET==============================
  {
    method: 'GET',
    path: '/wechat',
    handler: async (request, h) => {
        try {
            //获取wechat支付参数
            return h.response("wechat").code(200);
        } catch (error) {
            console.error(error);
            
            return h.response(error.original.toString()).code(203);

            
        }
        
    },
    options: {
        auth: 'jwt',
        description: '从后端获取支付条件',
        notes: ' openId是从localstorage中提取的，orderIds是店铺订单的集合, price的单位是人民币的分',
        tags: ['api'], // ADD THIS TAG
        validate: {
             query: {
                 openIds: Joi.string(),
                 orderId: Joi.string(),
                 price: Joi.string(),
                 appId: Joi.string(),
             }
        }
        
    },
  },
  //==============END OF GET=======================
  //==============POST=============================
  //==============END OF POST======================
  {
    method: 'POST',
    path: '/wechat',
    handler: async (request, h) => {
        try {
            //获取wechat支付结果的通知
            return h.response("wechat").code(200);
        } catch (error) {
            console.error(error);
            
            return h.response(error.original.toString()).code(203);

            
        }
        
    },
    options: {
        auth: 'jwt',
        description: '这个方法主要用于获取微信服务端的通知，并且处理支付成功后的一系列操作，比如锚定角色，处理分佣等',
        notes: 'condition 是创建的对象字段数据， optional是可选参数，可以为空，以后考虑如何使用',
        tags: ['api'], // ADD THIS TAG
        validate: {
             payload: Joi.object(),
        }
        
    },
  },
  //==============PATCH============================
  //==============END OF PATCH=====================
  //==============DELETE===========================
  //==============END OF DELETE====================

]
