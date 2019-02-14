import Joi from 'joi';
import {User} from '../../models/';
import Request from 'request-promise';

import sha256 from 'sha256';

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
                mobile: '18820965455',
                id: id,
            });
        },
        options: {
            auth: false,
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
        path: '/auth',
        handler: (request, h) => {
            
            return h.response(request.auth.credentials.id).code(200)
        },
        options: {
            auth: 'jwt',
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
    {
        method: 'GET',
        path: '/users/{id}',
        handler: async (request, h) => {
            const { id } = request.params;
            const { fields } = JSON.parse(request.query.optional);
            
            try {
                const user = await User.findByPk(
                    id,
                    {attributes: fields}
                    );
                return h.response(user).code(200);
            } catch (error) {
                console.error(error.message.body);
                
                return h.response(error).code(203);
            }
            
        }
    },
    
    {
        method: 'GET',
        path: '/user/{username}',
        config: {auth: false},
        handler: async (request, h) => {
            const { username } = request.params;
            
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
    {
        method: 'GET',
        path: '/getsms',
        handler: async (request, h) => {

           const { mobile } = request.query;
           if(!mobile){
                return h.response("mobile missing").code(404);
           }
           const apikey = "05856ec439f15fa13b935f89988cf4d2";
            let num="";
                for(let i=0;i<4;i++)
                {
                    num+=Math.floor(Math.random()*10);
                }
            let text = "【鲜至臻品】感谢使用鲜至臻品，您的验证码是"+num+"，让我们一起开启寻臻之旅。如非本人操作，请忽略本短信。";

            let uri = "https://sms.yunpian.com/v2/sms/single_send.json";

            
            try {
                let ref = await  Request({
                      url: uri,
                      method: 'POST',
                      headers: {
                        'content-type':'application/x-www-form-urlencoded;charset=utf-8',
                        "Accept":'application/json;charset=utf-8'
                      },
                        form: {
                            apikey,
                            mobile,
                            text,
                        }

                        
                  });

                return h.response(sha256(num)).code(200);
                
            } catch (error) {
                const ERR =  JSON.parse(error.error);
                return h.response(ERR).code(200+ERR.code);
            }
        },
        options: {
            auth: false,
            description: '获取验证码',
            notes: '根据手机号,获取手机验证码',
            tags: ['api'], // ADD THIS TAG
            validate: {
                query: {
                    mobile: Joi.string().required()
                },  
            }
            
        },
    }
    
]