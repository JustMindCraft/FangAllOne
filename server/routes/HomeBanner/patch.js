import {HomeBanner} from '../../models/';
import Joi from 'joi';
export default [
    {
        method: 'PATCH',
        path: '/home_banner',
        handler: async (request, h) => {
            try{
                const { condition, optional} = request.payload;
                const banner =await HomeBanner.findOne({where:condition})
                if(!banner){
                    const newone = await HomeBanner.create({id:condition.id,images:optional.images})
                return newone

                }else{
                    const updateRlt  = await banner.update({
                        ...optional
                    });
                    return h.response(updateRlt).code(200);

                }
            }catch (error) {
                console.error(error);
                
            }
            
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