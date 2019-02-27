import Joi from 'joi';
import {Contact, App} from '../../models/';

export default [
  //==============GET==============================
  //根据联系方式ID查询单个联系方式
  {
    method: 'GET',
    path: '/contacts/{id}',
    handler: async (request, h) => {
        try {
          const { id } = request.params;
          let contact = await Contact.findOne({
            id:id
            }
          )
          return h.response(contact).code(200);
        } catch (error) {
            console.error(error);
            return h.response(error.original.toString()).code(203);
        }
        
    },
    options: {
        auth: false,
        description: '根据ID获取地址信息',
        notes: '根据ID获取地址信息',
        tags: ['api'], // ADD THIS TAG
        validate: {
             query: {
                 condition: Joi.string(),
                 optional: Joi.string(),
             }
        }
        
    },
  },
  //查询地址列表
  {
    method: 'GET',
    path: '/contacts',
    handler: async (request, h) => {
      try {
          const condition = JSON.parse(request.query.condition);
          const optional = JSON.parse(request.query.optional);
          const { sort, feilds, page, pagesize} = optional;
          const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
          const app = await App.findOne({
              where: {
                  host
              },
          })
          const contacts = await Contact.findAll({
              where: {
                  ...condition,
              },
              attributes: feilds,
              order: [sort],
              limit: pagesize,
              offset: (page-1)*pagesize
          })
          return h.response(contacts).code(200);
      } catch (error) {
          console.log(error);
          
          return h.response(error.original.toString()).code(203);

          
      }
        
    },
    options: {
        auth: false,
        description: '获取联系方式的列表',
        notes: '获取联系方式的列表',
        tags: ['api'], // ADD THIS TAG
        validate: {
            query: {
                condition: Joi.string(),
                optional: Joi.string(),
                token: Joi.string(),
                appId: Joi.string(),
            }
        }
        
    }
  },
  //根据条件查询单个联系方式
  {
    method: 'GET',
    path: '/contact',
    handler: async (request, h) => {
      try{
        const condition = JSON.parse(request.query.condition);
        const app = await App.findOne({
          where: {
              host
          },
      })
      const contact = await Contact.findOne({
        where: {
            ...condition,
            appId: app.id,
        }
      })
        return h.response(contact).code(200);
      } catch(error){
        console.log(error);
          
        return h.response(error.original.toString()).code(203);
      }


    },
    options: {
      auth: false,
      description: '根据联系方式的独特属性，查出单个联系方式',
      notes: '根据联系方式的独特属性，查出单个联系方式',
      tags: ['api'], // ADD THIS TAG
      validate: {
          query: {
              condition: Joi.string(),
              optional: Joi.string(),
              token: Joi.string(),
              appId: Joi.string(),
          }
      }
      
  }
  },
  //==============END OF GET=======================
  //==============POST=============================
  {
    method: 'POST',
    path: '/contact',
    handler: async (request, h) => {
      const { condition } = request.payload
      const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
      const app = await App.findOne({
          where: {
              host
          },
      })
      const contact = await Contact.create(
        {
            ...condition,
            appId: app.id
        }
    );
      
    return h.response(contact).code(200);
    },
    options: {
        description: '创建一个联系方式',
        notes: 'condition参数包含创建的字段, username, password, 这个方法特殊的地方在于，会返回一个token',
        tags: ['api'], // ADD THIS TAG
        validate: {
            query: {
                condition: Joi.required()
            },  
        }
        
    },
  },

  //==============END OF POST======================
  //==============PATCH============================
  //修改联系方式
  {
      method: 'PATCH',
      path: '/contact/{id}',
      handler: (request, h) => {
      const id = request.params
      const condition = JSON.parse(request.query.condition);
      Contact.update(id,condition).then(function(alt){
        if(!error){
          return h.response(alt).code(200);
        }
      },function(error){
        console.log(error)
      })
      },
      options: {
        auth: false,
        description: '根据ID修改单个联系方式',
        notes: '根据ID修改单个联系方式',
        tags: ['api'], // ADD THIS TAG
        validate: {
             query: {
                 condition: Joi.string(),
                 optional: Joi.string(),
             }
        }
        
    },
  },
  //软删除

  //==============END OF PATCH=====================

  //==============PUT==============================
  {
    method: 'PUT',
    path: '/contacts',
    handler: (request, h) => {

    }
  },
  //==============END OF PUT=======================
  //==============DELETE===========================
  //删除单个联系方式
  {
      method: 'DELETE',
      path: '/contact',
      handler: (request, h) => {
        const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
        const app =  App.findOne({
            where: {
                host
            },
        })
          const condition = JSON.parse(request.query.condition);
          Contact.destroy({
            ...condition,
            appId: app.id
          }).then(function(rowDeleted){
              if(rowDeleted===0){
                console.log('删除成功')
              }
          },function(error){
            console.log(err)
          })
      },
      options: {
        auth: false,
        description: '从数据库中删除商品',
        notes: '从数据库中删除商品',
        tags: ['api'], // ADD THIS TAG
        validate: {
             query: {
                 condition: Joi.string(),
                 optional: Joi.string(),
             }
        }
        
    },
  },
  //删除多个联系方式
  {
    method: 'DELETE',
    path: '/contacts',
    handler: (request, h) => {
      const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
      const app =  App.findOne({
          where: {
              host
          },
      })
        const condition = JSON.parse(request.query.condition);
        Contact.destroy({
          ...condition,
          appId:app.id
        }).then(function(rowDeleted){
            if(rowDeleted===0){
              console.log('删除成功')
            }
        },function(error){
          console.log(err)
        })
    },
    options: {
      auth: false,
      description: '从数据库中批量删除商品',
      notes: '从数据库中批量删除商品',
      tags: ['api'], // ADD THIS TAG
      validate: {
           query: {
               condition: Joi.string(),
               optional: Joi.string(),
           }
      }
      
  },
},
  //==============END OF DELETE====================
]
