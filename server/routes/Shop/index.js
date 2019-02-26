import Joi from 'joi';
import {Shop, App} from '../../models/';

export default [
  //==============GET==============================
  //根据产品ID查询单个产品
  {
    method: 'GET',
    path: '/shops/{id}',
    handler: async (request, h) => {
        try {
          const { id } = request.params;
          let shop = await Shop.findOne({
            id:id
            }
          )
          return h.response(shop).code(200);
        } catch (error) {
            console.error(error);
            return h.response(error.original.toString()).code(203);
        }
        
    },
    options: {
        auth: false,
        description: '根据ID获取单个店铺的信息',
        notes: '根据ID获取单个店铺的信息',
        tags: ['api'], // ADD THIS TAG
        validate: {
             query: {
                 condition: Joi.string(),
                 optional: Joi.string(),
             }
        }
        
    },
  },
  //查询店铺列表
  {
    method: 'GET',
    path: '/shops',
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
          const shops = await Shop.findAll({
              where: {
                  ...condition,
                  appId:app.id
              },
              attributes: feilds,
              order: [sort],
              limit: pagesize,
              offset: (page-1)*pagesize
          })
          return h.response(shops).code(200);
      } catch (error) {
          console.log(error);
          
          return h.response(error.original.toString()).code(203);

          
      }
        
    },
    options: {
        auth: false,
        description: '获取店铺的列表',
        notes: '获取店铺的列表',
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
  //根据条件查询单个产品
  {
    method: 'GET',
    path: '/shop/',
    handler: async (request, h) => {
      try{
        const condition = JSON.parse(request.query.condition);
        const app = await App.findOne({
          where: {
              host
          },
      })
      const shop = await Shop.findOne({
        where: {
            ...condition,
            appId: app.id,
        }
      })
        return h.response(shop).code(200);
      } catch(error){
        console.log(error);
          
        return h.response(error.original.toString()).code(203);
      }


    },
    options: {
      auth: false,
      description: '根据店铺的独特属性，查出单个产品',
      notes: '根据店铺的独特属性，查出单个产品',
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
  {
    method: 'GET',
    path: '/shpos/restore',
    handler: async (request, h) => {
        try {
          const condition = JSON.parse(request.query.condition);

          const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
          const app = await App.findOne({
              where: {
                  host
              },
          })
          let shop = await Shop.restore({
            where:condition,
            appId: app.id,
            }
          )
          return h.response(shop).code(200);
        } catch (error) {
            console.error(error);
            return h.response(error.original.toString()).code(203);
        }
        
    },
    options: {
        auth: false,
        description: '根据条件恢复软删除',
        notes: '根据条件恢复软删除',
        tags: ['api'], // ADD THIS TAG
        validate: {
             query: {
                 condition: Joi.string(),
                 optional: Joi.string(),
             }
        }
        
    },
  },
  //==============END OF GET=======================
  //==============POST=============================
  {
    method: 'POST',
    path: '/shop',
    handler: async (request, h) => {
      const { condition } = request.payload
      const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
      const app = await App.findOne({
          where: {
              host
          },
      })
      const shop = await Shop.create(
        {
            ...condition,
            appId: app.id
        }
    );
      
    return h.response(shop).code(200);
    },
    options: {
        description: '创建一个店铺',
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
      path: '/shops',
      handler: async (request, h) => {
        const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
        const app = await App.findOne({
            where: {
                host
            },
        })
        const { condition } = request.payload
        const shops = await Shop.bulkCreate(condition,
          {ignoreDuplicates : true,
          appId:app.id});
      return h.response(shops).code(200);
      },
      options: {
          description: '批量创建店铺',
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
  //修改产品
  {
      method: 'PATCH',
      path: '/shop/{id}',
      handler: (request, h) => {
      const id = request.params
      const condition = JSON.parse(request.query.condition);
      Shop.update(id,condition).then(function(alt){
        if(!error){
          return h.response(alt).code(200);
        }
      },function(error){
        console.log(error)
      })
      },
      options: {
        auth: false,
        description: '根据ID修改单个店铺',
        notes: '根据ID修改单个店铺',
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
  {
    method: 'PATCH',
    path: '/shop',
    handler: (request, h) => {
    const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
    // const app = await App.findOne({
    //     where: {
    //         host
    //     },
    // })

    const condition = JSON.parse(request.query.condition);

    Shop.destroy({
      ...condition,
      // appId: app.id
      },{force:false}.then(function(alt){
      if(!error){
        console.log('软删除成功')
      }
    },function(error){
      console.log(error)
    })
    )},
    options: {
      auth: false,
      description: '软删除单个店铺',
      notes: '软删除单个店铺',
      tags: ['api'], // ADD THIS TAG
      validate: {
           query: {
               condition: Joi.string(),
               optional: Joi.string(),
           }
      }
      
  },
  },
  //==============END OF PATCH=====================

  //==============PUT==============================
  {
    method: 'PUT',
    path: '/shops',
    handler: (request, h) => {

    }
  },
  //==============END OF PUT=======================
  //==============DELETE===========================
  //删除单个产品
  {
      method: 'DELETE',
      path: '/shop',
      handler: (request, h) => {
        const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
        const app =  App.findOne({
            where: {
                host
            },
        })
          const condition = JSON.parse(request.query.condition);
          Shop.destroy({
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
        description: '从数据库中删除店铺',
        notes: '从数据库中删除店铺',
        tags: ['api'], // ADD THIS TAG
        validate: {
             query: {
                 condition: Joi.string(),
                 optional: Joi.string(),
             }
        }
        
    },
  },
  //删除多个产品
  {
    method: 'DELETE',
    path: '/shops',
    handler: (request, h) => {
      const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
      const app =  App.findOne({
          where: {
              host
          },
      })
        const condition = JSON.parse(request.query.condition);
        Shop.destroy({
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
