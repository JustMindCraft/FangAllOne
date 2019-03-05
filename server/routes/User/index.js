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
          
      },
      options: {
          auth: false,
          description: '获取一个用户的信息',
          notes: 'condition参数包含用户的查询条件， optional包含分页page,pagesize，筛选字段filter,以及排序sort信息',
          tags: ['api'], // ADD THIS TAG
          validate: {
              query: {
                  token: Joi.required(),
                  appId: Joi.string().optional(),
                  condition: Joi.string(),
                  optional: Joi.string(),
              }, 
              params: {
                  id: Joi.required(),
              } 
          }
          
      },
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
              console.error(error);
              
              return error.errors;
          }

      }
  },

  //==============END OF GET=======================
  //==============POST=============================
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
            payload: {
                condition: Joi.required()
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
  //==============END OF POST======================
  
  //==============PATCH============================
  {
    method: 'PATCH',
    path: '/user',
    handler: (request, h) => {
        return 'Hello, world!';
    }
  },
  //==============END OF PATCH=====================

  //==============PUT==============================
  {
    method: 'PUT',
    path: '/users',
    handler: (request, h) => {
        return 'Hello, world!';
    }
  },
  //==============END OF PUT=======================

  //==============DELETE===========================
  {
    method: 'DELETE',
    path: '/user',
    handler: (request, h) => {
        return 'delete one';
    }
  },
  {
      method: 'DELETE',
      path: '/users',
      handler: (request, h) => {
          return 'delete many';
      }
  }
  //==============END OF DELETE====================
]