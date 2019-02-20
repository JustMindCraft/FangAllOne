import Joi from 'joi';
import {User, App} from '../../models/';
import JWT from 'jsonwebtoken';
import config from '../../config';

const ENV = process.env.NODE_ENV;


export default [
    {
        method: 'POST',
        path: '/product',
        handler: async (request, h) => {
           
        },
        options: {
            description: '创建一个产品',
            notes: 'condition参数包含创建的字段, username, password, 这个方法特殊的地方在于，会返回一个token',
            tags: ['api'], // ADD THIS TAG
            validate: {
                query: {
                    condition: Joi.required()
                },  
            }
            
        },
    },
    {
        method: 'POST',
        path: '/products',
        handler: async (request, h) => {
           
        },
        options: {
            description: '创建一个产品',
            notes: 'condition参数包含创建的字段, username, password, 这个方法特殊的地方在于，会返回一个token',
            tags: ['api'], // ADD THIS TAG
            validate: {
                query: {
                    condition: Joi.required()
                },  
            }
            
        },
    }, 
]