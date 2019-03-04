import Joi from 'joi';
import {User, App} from '../../models/';
import JWT from 'jsonwebtoken';
import config from '../../config';
import Request from 'request-promise';
import sha256 from 'sha256';
import UserCache from '../../cache/UserCache';
const ENV = process.env.NODE_ENV;

const querySchema = Joi.object({
    condition: Joi.string().required(),
    optional: Joi.string().optional(),
    appId: Joi.string(),
    token: Joi.string().optional(),
})

export default [
    //==============GET==============================
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
                    token: Joi.required(),
                    appId: Joi.string().optional(),
                },  
            }
            
        },
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
    },
    //==============END OF GET=======================
  //==============POST=============================
  {
    method: 'POST',
    path: '/auth',
    handler: async (request, h) => {
            const { username, password, model} = request.payload;
            const host = request.headers.origin.replace(/https?:\/\//, '');
            const app = await App.findOne({host});

            try {
                const user =  await User.auth(
                    username, password, model, app.id
                );
               
                if(!user){
                    return h.response(false).code(203)
                }
                 //将查出来的用户加入loki数据高速缓存
                UserCache.insert({id: user.id, password: user.password});
                const token = JWT.sign({
                    id: user.id,
                    password: password,
                }, config[ENV].privateKey, {
                    expiresIn: 604800 // 1 week
                  });
                return h.response({
                    id: user.id,
                    username,
                    token
                }).code(200);
            } catch (error) {
                console.error(error);
            
                return error.errors;
            }
            
    },
    options: {
        auth: false,
        description: '登录、认证用户',
        notes: 'condition参数包含创建的字段, username, password, 这个方法特殊的地方在于，会返回一个token',
        tags: ['api'], // ADD THIS TAG
        validate: {
            payload: {
                username: Joi.string().required(),
                password: Joi.string().required(),
                model: Joi.string().required(),
            },  
        }
        
    },
},
{
    method: 'POST',
    path: '/register',
    
    handler: async (request, h) => {
        const { username, password} = request.payload;
        
        try {
            const user =  await User.register(
                username,
                password
            );
            const token = JWT.sign({
                id: user.id,
                password: password,
            }, config[ENV].privateKey, {
                expiresIn: 604800 // 1 week
              });
            return h.response({
                id: user.id,
                username,
                token
            }).code(200);
            
        } catch (error) {
            console.error(error);
            
            return error.errors;
        }
      
    },
    options: {
        auth: false,
        description: '注册用户',
        notes: '注册一个用户，会返回一个token',
        tags: ['api'], // ADD THIS TAG
        validate: {
            payload: {
                username: Joi.string().required(),
                password: Joi.string().required()
            },  
        }
        
    },
    },
  //==============END OF POST======================

]