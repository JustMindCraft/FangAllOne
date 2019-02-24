import Joi from 'joi';
import {Product} from '../../models/';

export default [
  //==============GET==============================
  //根据产品ID查询单个产品
  {
    method: 'GET',
    path: '/products/{id}',
    handler: async (request, h) => {
        try {
          const { id } = request.params;
          const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
          const app = await App.findOne({
              where: {
                  host
              },
          })
          let product = await Product.findOne({
            id:id,
            appId: app.id,
            }
          )
          return h.response(product).code(200);
        } catch (error) {
            console.error(error);
            return h.response(error.original.toString()).code(203);
        }
        
    },
    options: {
        auth: false,
        description: '根据ID获取单个产品的信息',
        notes: '获取ID单个产品的信息',
        tags: ['api'], // ADD THIS TAG
        validate: {
             query: {
                 condition: Joi.string(),
                 optional: Joi.string(),
             }
        }
        
    },
  },
  //查询产品列表
  {
    method: 'GET',
    path: '/products/',
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
          const products = await Product.findAll({
              where: {
                  ...condition,
                  appId: app.id,
              },
              attributes: feilds,
              order: [sort],
              limit: pagesize,
              offset: (page-1)*pagesize
          })
          return h.response(products).code(200);
      } catch (error) {
          console.log(error);
          
          return h.response(error.original.toString()).code(203);

          
      }
        
    },
    options: {
        auth: false,
        description: '获取产品的列表',
        notes: '获取产品的列表',
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
    path: '/product/',
    handler: async (request, h) => {
      try{
        const condition = JSON.parse(request.query.condition);
        const app = await App.findOne({
          where: {
              host
          },
      })
      const product = await Product.findOne({
        where: {
            ...condition,
            appId: app.id,
        }
      })
        return h.response(product).code(200);
      } catch(error){
        console.log(error);
          
        return h.response(error.original.toString()).code(203);
      }


    },
    options: {
      auth: false,
      description: '根据产品的独特属性，查出单个产品',
      notes: '根据产品的独特属性，查出单个产品',
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
    path: '/products/restore',
    handler: async (request, h) => {
        try {
          const condition = JSON.parse(request.query.condition);

          const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
          const app = await App.findOne({
              where: {
                  host
              },
          })
          let product = await Product.restore({
            where:condition,
            appId: app.id,
            }
          )
          return h.response(product).code(200);
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
    path: '/product',
    handler: async (request, h) => {
      const { condition } = request.payload
      const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
      const app = await App.findOne({
          where: {
              host
          },
      })
      const product = await Product.create(
        {
            ...condition,
            appId: app.id
        }
    );
      
    return h.response(product).code(200);
    },
    options: {
        description: '创建一个产品',
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
      path: '/products',
      handler: async (request, h) => {
        
      },
      options: {
          description: '创建一个产品',
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
      path: '/product/{id}',
      handler: (request, h) => {
      const id = request.params
      const condition = JSON.parse(request.query.condition);
      Product.update(id,condition).then(function(alt){
        if(!error){
          return h.response(alt).code(200);
        }
      },function(error){
        console.log(error)
      })
      },
      options: {
        auth: false,
        description: '根据ID修改单个产品',
        notes: '根据ID修改单个产品',
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
    path: '/product',
    handler: (request, h) => {
    const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
    // const app = await App.findOne({
    //     where: {
    //         host
    //     },
    // })
    const condition = JSON.parse(request.query.condition);
    Product.destroy({
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
      description: '软删除单个产品',
      notes: '软删除单个产品',
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
    path: '/products',
    handler: (request, h) => {

    }
  },
  //==============END OF PUT=======================
  //==============DELETE===========================
  //删除单个产品
  {
      method: 'DELETE',
      path: '/product',
      handler: (request, h) => {
        const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
        // const app = await App.findOne({
        //     where: {
        //         host
        //     },
        // })
          const condition = JSON.parse(request.query.condition);
          Product.destroy({
            ...condition,
            // appId: app.id
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
  //删除多个产品
  {
    method: 'DELETE',
    path: '/products',
    handler: (request, h) => {
      const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
      // const app = await App.findOne({
      //     where: {
      //         host
      //     },
      // })
        const condition = JSON.parse(request.query.condition);
        Product.destroy({
          ...condition,
          // appId:app.id
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
