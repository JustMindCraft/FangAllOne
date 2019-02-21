import Joi from 'joi';
import models, { App } from '../../models/';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
    this.splice(index, 1);
    }
};

export default [
  //==============GET=============================
  {
    method: 'GET',
    path: '/app',
    handler: async (request, h) => {
        try {
            
            
            const condition = JSON.parse(request.query.condition);
            const optional = JSON.parse(request.query.optional);
            const {token, appId} = request.query;

            
            const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
            
           
            const includeModels = [];
            for (let index = 0; index < optional.fields.length; index++) {
                const field = optional.fields[index];
                if(models[field]){
                    optional.fields.remove(field);
                    includeModels.push({
                        model: models[field],
                    });
                }
                
            }

            const attributes = ['id', 'name', 'appId'].concat(optional.fields);
            
            let app = await App.findOne(
                {
                    where: {
                    ...condition,
                    host,
                    appId

                    },
                    attributes,
                    include: includeModels,
            })
            if(!app){
                app = await App.findOne({
                        where: {isDefault: true},
                     attributes,
                     include: includeModels,
                });
            }

            return h.response(app).code(200);
        } catch (error) {
            console.log(error);
            
            return h.response(error.original.toString()).code(203);

            
        }
        
    },
    options: {
        auth: false,
        description: '获取一个app的信息',
        notes: '获取一个APP的信息, 如果没有找到默认加载主应用',
        tags: ['api'], // ADD THIS TAG
        validate: {
             query: {
                 condition: Joi.string(),
                 optional: Joi.string(),
                 token: Joi.string(),
                 appId: Joi.string(),
             }
        }
        
    },
  },
  {
      method: 'GET',
      path: '/apps',
      handler: async (request, h) => {
          try {
              
              
              const condition = JSON.parse(request.query.condition);
              const optional = JSON.parse(request.query.optional);
              const {token, appId} = request.query;

              
              const host = request.headers.origin.replace(/^(https?|ftp|file):\/\//, '');
              
            
              const includeModels = [];
              for (let index = 0; index < optional.fields.length; index++) {
                  const field = optional.fields[index];
                  if(models[field]){
                      optional.fields.remove(field);
                      includeModels.push({
                          model: models[field],
                      });
                  }
                  
              }

              const attributes = ['id', 'name', 'appId'].concat(optional.fields);
              
              let app = await App.findOne(
                  {
                      where: {
                      ...condition,
                      host,
                      appId

                      },
                      attributes,
                      include: includeModels,
              })
              if(!app){
                  app = await App.findOne({
                          where: {isDefault: true},
                      attributes,
                      include: includeModels,
                  });
              }

              return h.response(app).code(200);
          } catch (error) {
              console.log(error);
              
              return h.response(error.original.toString()).code(203);

              
          }
          
      },
      options: {
          auth: false,
          description: '获取一个app的信息的列表',
          notes: 'condition 是查询条件， optional 是排序和分页',
          tags: ['api'], // ADD THIS TAG
          validate: {
              query: {
                  condition: Joi.string(),
                  optional: Joi.string(),
                  token: Joi.string(),
                  appId: Joi.string(),
              }
          }
          
      },
  },
  //==============GET=============================
  //==============END OF GET=======================

  //==============POST=============================
  //==============END OF POST======================
  //==============PATCH============================
  //==============END OF PATCH=====================
    //==============DELETE=========================
  //==============END OF DELETE====================
  //patch方法
  {
    method: 'PATCH',
    path: '/app',
    handler: async (request, h) => {
        try {

            const { condition, optional} = request.payload;
            let keys = []
            for (const key in optional) {
                if (optional.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }

            const app = await App.findOne({where: condition, attributes: ['id'].concat(keys)});

            const updateRlt  = await app.update({
                ...optional,
            });
            
            return h.response(updateRlt).code(200);

        } catch (error) {
            console.error(error);
            
        }
        
    },
    options: {
        auth: 'jwt',
        description: '修改一个应用的基本信息',
        notes: '获取一个APP的信息, 如果没有找到默认加载主应用',
        tags: ['api'], // ADD THIS TAG
        validate: {
            payload: {
                condition: Joi.object().required(),
                optional: Joi.object().required(),
            },
            query: {
                token: Joi.string().required(),
                appId: Joi.string()
            }
        }
        
    },
  },
  //delete方法
]

