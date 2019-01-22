import Joi from 'joi';
import User from '../../models/User';

const querySchema = Joi.object({
    condition: Joi.string().required(),
    optional: Joi.string().optional(),
})
export default [
    {
        method: 'GET',
        path: '/user',
        handler: (request, h) => {
            const condition = decodeURI(request.query.condition);
            const {id} = JSON.parse(condition);
            return h.response({
                username: 'simon',
                email: 'simonxu',
                id: id,
            });
        },
        options: {
            description: '获取一个用户的信息',
            notes: 'condition参数包含用户的查询条件， optional包含分页page,pagesize，筛选字段filter,以及排序sort信息',
            tags: ['api'], // ADD THIS TAG
            validate: {
                query: querySchema,  
            }
            
        },
    },
    {
        method: 'GET',
        path: '/users',
        handler: (request, h) => {
            return 'Hello, world!';
        }
    },
    {
        method: 'GET',
        path: '/users/{id}',
        handler: (request, h) => {
            return 'Hello, world!';
        }
    },
    
    {
        method: 'GET',
        path: '/user/{username}',
        handler: async (request, h) => {
            const { username } = request.params;
            console.log(username);
            
            try {
               const user =   await User.findOne({where: {username}, attributes: ['username']});
               if(!user){
                   return h.response(-1).code(204);
               }
               return user;
                
            } catch (error) {
                console.log(error);
                
                return error.errors;
            }

        }
    },
   
   
    
]