import Joi from 'joi';
import { App } from '../../models/';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;


export default [
    {
        method: 'GET',
        path: '/app',
        handler: async (request, h) => {
            try {
                const { host, appId } = request.query;
                let app = await App.findOne({where: {
                    [Op.or]: 
                    [
                        {host}, 
                        {appId}
                    ]
                }})
                if(!app){
                    app = await App.findOne({where: {isDefault: true}})
                }
                return h.response(app).code(200);
            } catch (error) {
                console.error(error);
                
            }
            
        },
        options: {
            auth: false,
            description: '获取一个app的信息',
            notes: '获取一个APP的信息, 如果没有找到默认加载主应用',
            tags: ['api'], // ADD THIS TAG
            validate: {
                 query: {
                     host: Joi.string(),
                     uuid: Joi.string(),
                 }
            }
            
        },
    },
]