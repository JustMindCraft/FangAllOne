import Joi from 'joi';
import {Product} from '../../models/';

export default [
  {
    method: 'GET',
    path: '/products/{id}',
    handler: async (request, h) => {
        try {
          const { id } = request.params;
          let product = await Product.findOne({
            id:id
            }
          )
          return h.response(product).code(200);
        } catch (error) {
            console.log(error);
            return h.response(error.original.toString()).code(203);
        }
        
    },
    options: {
        auth: false,
        description: '获取单个产品的信息',
        notes: '获取单个产品的信息',
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