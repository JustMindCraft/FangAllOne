import Joi from 'joi';
import models, { App, Role } from '../../models/';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
    this.splice(index, 1);
    }
};

export default [
  //==============GET==============================
  {
    method: 'GET',
    path: '/roles',
    handler: async (request, h) => {
        try {
            
            
            const condition = JSON.parse(request.query.condition);
            const optional = JSON.parse(request.query.optional);
            const { sort, feilds, page, pagesize} = optional;
            const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
            const app = await App.findOne({
                where: {
                    host
                },
            })
            const roles = await Role.findAll({
                where: {
                    ...condition,
                    appId: app.id,
                },
                attributes: feilds,
                order: [sort],
                limit: pagesize,
                offset: (page-1)*pagesize
            })
            return h.response(roles).code(200);
        } catch (error) {
            console.error(error);
            
            return h.response(error.original.toString()).code(203);

            
        }
        
    },
    options: {
        auth: 'jwt',
        description: '获取一个角色的信息的列表',
        notes: 'condition 是查询条件， optional包含sort排序和fields字段 page, pagesize分页',
        tags: ['api'], // ADD THIS TAG
        validate: {
             query: {
                 condition: Joi.string(),
                 optional: Joi.string(),
                 token: Joi.string(),
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
    path: '/role',
    handler: async (request, h) => {
        try {
            const { optional, condition } = request.payload;
            const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
            const app = await App.findOne({
                where: {
                    host
                },
            })
            const newRole = await Role.create(
                {
                    ...condition,
                    appId: app.id
                }
            );
              
            return h.response(newRole).code(200);
        } catch (error) {
            console.error(error);
            
            return h.response(error.original.toString()).code(203);

            
        }
        
    },
    options: {
        auth: 'jwt',
        description: '创建一个角色',
        notes: 'condition 是创建的对象字段数据， optional是可选参数，可以为空，以后考虑如何使用',
        tags: ['api'], // ADD THIS TAG
        validate: {
             payload: {
                 condition: Joi.object(),
                 optional: Joi.object(),
                
             },
             query: {
                token: Joi.string(),
             }
        }
        
    },
  },
  //==============PATCH============================
  //==============END OF PATCH=====================
  //==============DELETE===========================
  //==============END OF DELETE====================

]
