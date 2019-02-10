import Joi from 'joi';
import { App } from '../../models/';

export default [
    {
        method: 'GET',
        path: '/app',
        handler: async (request, h) => {
            try {
                const app = await App.create({
                    name: "aaa"
                })
                return h.response(app).code(200);
            } catch (error) {
                console.error(error);
                
            }
            
        },
        options: {
            auth: false,
            description: '获取一个app的信息',
            notes: '获取一个APP的信息',
            tags: ['api'], // ADD THIS TAG
            validate: {
                 query: Joi.required()
            }
            
        },
    },
]