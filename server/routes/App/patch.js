import Joi from 'joi';
import Sequelize from 'sequelize';
import { App } from '../../models/index.js';

const Op = Sequelize.Op;


export default [
    {
        method: 'PATCH',
        path: '/app',
        handler: async (request, h) => {
            try {

                const { condition, optional} = request.payload;
                let keys = []
                for (const key in optional) {
                    if (optional.hasOwnProperty(key)) {
                        keys.push(key);
                    }
                }

                const app = await App.findOne({where: condition, attributes: ['id'].concat(keys)});

                const updateRlt  = await app.update({
                    ...optional,
                });
                
                return h.response(updateRlt).code(200);

            } catch (error) {
                console.error(error);
                
            }
            
        },
        options: {
            auth: 'jwt',
            description: '修改一个应用的基本信息',
            notes: '获取一个APP的信息, 如果没有找到默认加载主应用',
            tags: ['api'], // ADD THIS TAG
            validate: {
                 payload: {
                     condition: Joi.object().required(),
                     optional: Joi.object().required(),
                 },
                 query: {
                     token: Joi.string().required(),
                     appId: Joi.string()
                 }
            }
            
        },
    },
]