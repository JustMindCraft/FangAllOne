import {Product} from '../../models/';
import Joi from 'joi';
export default [
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
  //伪删除
  {
    method: 'PATCH',
    path: '/product/',
    handler: (request, h) => {
    const condition = JSON.parse(request.query.condition);
    Product.destroy(condition,{force:false}.then(function(alt){
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
]