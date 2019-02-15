import {HomeBanner} from '../../models/';
import Joi from 'joi';
export default [
    {
        method: 'PATCH',
        path: '/home_banner',
        handler: async (request, h) => {
            // let updataimg= await HomeBanner.insertOrUpdate()
            try{
                const { condition, optional} = request.payload;
                console.log('打印参数'+optional.images)
                const banner =await HomeBanner.findOne({where:condition})
                console.log('打印banner结果为'+!banner)
                if(!banner){
                    const newone = await HomeBanner.upsert({id:condition.id,images:optional.images})
                    console.log('新创建的banner为'+newone)
                return newone

                }else{
                    const updateRlt  = await banner.update({
                        ...optional
                    });
                    console.log('打印更新后的结果'+updateRlt)
                    return h.response(updateRlt).code(200);

                }
                
                // console.log('打印结果'+updateRlt)
                // return h.response(updateRlt).code(200);
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