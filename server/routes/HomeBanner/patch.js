import {HomeBanner} from '../../models/';
import Joi from 'joi';
export default [
    {
        method: 'PATCH',
        path: '/home_banner',
        handler: (request, h) => {
            // let updataimg= await HomeBanner.insertOrUpdate()
            return 'Hello, world!';
        },
        options: {
            auth: false,
            description: '认证一个用户的token',
            notes: 'condition参数包含用户的查询条件， optional包含分页page,pagesize，筛选字段filter,以及排序sort信息',
            tags: ['api'], // ADD THIS TAG
            validate: {
                query: {
                    token: Joi.required()
                },  
            }
            
        },
    },
]