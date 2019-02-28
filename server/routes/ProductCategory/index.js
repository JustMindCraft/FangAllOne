import Joi from 'joi';
import {Product, App} from '../../models/';

export default [
  //==============GET==============================
  //根据分类ID查询单个分类
  {
    method: 'GET',
    path: '/product_categories/{id}',
    handler: async (request, h) => {
        try {
          const { id } = request.params;
          let category = await ProductCategory.findOne({
            id:id
            }
          )
          return h.response(category).code(200);
        } catch (error) {
            console.error(error);
            return h.response(error.original.toString()).code(203);
        }
        
    },
    options: {
        auth: false,
        description: '根据ID获取单个分类的信息',
        notes: '获取ID单个分类的信息',
        tags: ['api'], // ADD THIS TAG
        validate: {
             query: {
                 condition: Joi.string(),
                 optional: Joi.string(),
             }
        }
        
    },
  },
  //查询分类列表
  {
    method: 'GET',
    path: '/product_categories',
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
          const product_categories = await ProductCategory.findAll({
              where: {
                  ...condition,
              },
              attributes: feilds,
              order: [sort],
              limit: pagesize,
              offset: (page-1)*pagesize
          })
          return h.response(product_categories).code(200);
      } catch (error) {
          console.log(error);
          
          return h.response(error.original.toString()).code(203);

          
      }
        
    },
    options: {
        auth: false,
        description: '获取分类的列表',
        notes: '获取分类的列表',
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
  //根据条件查询单个分类
  {
    method: 'GET',
    path: '/product_category',
    handler: async (request, h) => {
      try{
        const condition = JSON.parse(request.query.condition);
        const app = await App.findOne({
          where: {
              host
          },
      })
      const product_category = await ProductCategory.findOne({
        where: {
            ...condition,
            appId: app.id,
        }
      })
        return h.response(product_category).code(200);
      } catch(error){
        console.log(error);
          
        return h.response(error.original.toString()).code(203);
      }


    },
    options: {
      auth: false,
      description: '根据分类的独特属性，查出单个分类',
      notes: '根据分类的独特属性，查出单个分类',
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
    path: '/product_categories/restore',
    handler: async (request, h) => {
        try {
          const condition = JSON.parse(request.query.condition);

          const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
          const app = await App.findOne({
              where: {
                  host
              },
          })
          let product_category = await ProductCategory.restore({
            where:condition,
            appId: app.id,
            }
          )
          return h.response(product_category).code(200);
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
    path: '/product_category',
    handler: async (request, h) => {
      const { condition } = request.payload
      const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
      const app = await App.findOne({
          where: {
              host
          },
      })
      const product_category = await ProductCategory.create(
        {
            ...condition,
            appId: app.id
        }
    );
      
    return h.response(product_category).code(200);
    },
    options: {
        description: '创建一个分类',
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
      path: '/product_categories',
      handler: async (request, h) => {
        const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
        const app = await App.findOne({
            where: {
                host
            },
        })
        const { condition } = request.payload
        const product_categories = await ProductCategory.bulkCreate(condition,
          {ignoreDuplicates : true,
          appId:app.id});
      return h.response(product_categories).code(200);
      },
      options: {
          description: '批量创建分类',
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
  //修改分类
  {
      method: 'PATCH',
      path: '/product_category/{id}',
      handler: (request, h) => {
      const id = request.params
      const condition = JSON.parse(request.query.condition);
      ProductCategory.update(id,condition).then(function(alt){
        if(!error){
          return h.response(alt).code(200);
        }
      },function(error){
        console.log(error)
      })
      },
      options: {
        auth: false,
        description: '根据ID修改单个分类',
        notes: '根据ID修改单个分类',
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
    path: '/product_category',
    handler: (request, h) => {
    const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
    // const app = await App.findOne({
    //     where: {
    //         host
    //     },
    // })

    const condition = JSON.parse(request.query.condition);

    ProductCategory.destroy({
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
      description: '软删除单个分类',
      notes: '软删除单个分类',
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
    path: '/product_categories',
    handler: (request, h) => {

    }
  },
  //==============END OF PUT=======================
  //==============DELETE===========================
  //删除单个分类
  {
      method: 'DELETE',
      path: '/product_category',
      handler: (request, h) => {
        const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
        const app =  App.findOne({
            where: {
                host
            },
        })
          const condition = JSON.parse(request.query.condition);
          ProductCategory.destroy({
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
  //删除多个分类
  {
    method: 'DELETE',
    path: '/product_categories',
    handler: (request, h) => {
      const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
      const app =  App.findOne({
          where: {
              host
          },
      })
        const condition = JSON.parse(request.query.condition);
        ProductCategory.destroy({
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
