import {Product} from '../../models/';
import Joi from 'joi';
export default [
    //删除单个产品
  {
      method: 'DELETE',
      path: '/product',
      handler: (request, h) => {
          const condition = JSON.parse(request.query.condition);
          Product.destroy({
            where:condition
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
          return 'delete many';
      }
  }
]