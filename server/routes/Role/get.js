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
    {
        method: 'GET',
        path: '/roles',
        handler: async (request, h) => {
            try {
                
                
                const condition = JSON.parse(request.query.condition);
                const optional = JSON.parse(request.query.optional);
                const { sort, feilds, page, pagesize} = optional;
                const roles = await Role.findAll({
                    where: {
                        ...condition
                    },
                    attributes: feilds,
                    order: [sort],
                    limit: pagesize,
                    offset: (page-1)*pagesize
                })
                return h.response(roles).code(200);
            } catch (error) {
                console.log(error);
                
                return h.response(error.original.toString()).code(203);

                
            }
            
        },
        options: {
            auth: false,
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
]