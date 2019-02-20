import Joi from 'joi';
import {Product} from '../../models/';

export default [
  //根据产品ID查询单个产品
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

]