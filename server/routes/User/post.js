import Joi from 'joi';
import User from '../../models/User'

export default [
    {
        method: 'POST',
        path: '/user',
        handler: async (request, h) => {
           
        },
        options: {
            description: '创建一个用户',
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
        path: '/auth',
        handler: async (request, h) => {
                 const { username, password} = request.payload;
                return await User.auth({
                    username, password
                });
        },
        options: {
            description: '登录、认证用户',
            notes: 'condition参数包含创建的字段, username, password, 这个方法特殊的地方在于，会返回一个token',
            tags: ['api'], // ADD THIS TAG
            validate: {
                payload: {
                    username: Joi.string().required(),
                    password: Joi.string().required()
                },  
            }
            
        },
    },
    {
        method: 'POST',
        path: '/register',
        handler: async (request, h) => {
            console.log(request.payload);
            const { username, password} = request.payload;
            
            try {
                return await User.register(
                    username,
                    password
                );
            } catch (error) {
                return error.errors[0].message;
            }
           
        },
        options: {
            description: '注册用户',
            notes: 'condition参数包含创建的字段, username, password, 这个方法特殊的地方在于，会返回一个token',
            tags: ['api'], // ADD THIS TAG
            validate: {
                payload: {
                    username: Joi.string().required(),
                    password: Joi.string().required()
                },  
            }
            
        },
    },
    {
        method: 'POST',
        path: '/users',
        handler: (request, h) => {
            return 'Hello, world!';
        }
    },
]