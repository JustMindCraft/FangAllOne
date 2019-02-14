import Joi from 'joi';
import models, { App } from '../../models/';
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
        path: '/app',
        handler: async (request, h) => {
            try {
                
                
                const condition = JSON.parse(request.query.condition);
                const optional = JSON.parse(request.query.optional);
                
               
                const includeModels = [];
                for (let index = 0; index < optional.fields.length; index++) {
                    const field = optional.fields[index];
                    if(models[field]){
                        optional.fields.remove(field);
                        includeModels.push({
                            model: models[field],
                        });
                    }
                    
                }

                const attributes = ['id', 'name', 'appId'].concat(optional.fields);
                
                let app = await App.findOne(
                    {
                        where: {
                        ...condition
                        },
                        attributes,
                        include: includeModels,
                })
                if(!app){
                    app = await App.findOne({
                            where: {isDefault: true},
                         attributes,
                         include: includeModels,
                    });
                }

                return h.response(app).code(200);
            } catch (error) {
                console.log(error);
                
                return h.response(error.original.toString()).code(203);

                
            }
            
        },
        options: {
            auth: false,
            description: '获取一个app的信息',
            notes: '获取一个APP的信息, 如果没有找到默认加载主应用',
            tags: ['api'], // ADD THIS TAG
            validate: {
                 query: {
                     condition: Joi.string(),
                     optional: Joi.string(),
                 }
            }
            
        },
    },
]