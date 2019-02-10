import { LIST,
     UNKNOWN_METHOD,
      SHOW, 
      CREATE, 
      CREATE_MANY, 
      UPDATE, UPDATE_MANY,
       DELETE, DELETE_MANY, DESTROY, DESTROY_MANY, AUTH, REGISTER, SHOW_ID, SHOW_UNIQUE,
        CHECK_AUTH, 
        GET_SMS} 
from './constants/API';
import config from './config';
import axios from 'axios';


export  function auth(method:string, condition:any){
    switch(method){
        case AUTH:
            return axios.post(`${config.basicUri}/auth`, 
                    condition,
            );

        case CHECK_AUTH:
            return axios.get(`${config.basicUri}/auth?token=${condition}`);
        
        case REGISTER:
            return axios.post(`${config.basicUri}/register`, 
                    condition,
            );
        case GET_SMS: 
            return axios.post(`${config.basicUri}/getsms`,
                condition
            );
        default:
            return new Promise((res: any, rej:any)=> res(UNKNOWN_METHOD));  
    }
}


export  function api(sourceName:string="users", method:string=LIST, condition:any={}, optional:any={}){
    const inflect = require('i')();
    const singleSource = inflect.singularize(sourceName); 
    switch (method) {
        
        case LIST:
            return axios.get(`${config.basicUri}/${sourceName}`, {
                params: {
                    condition,
                    optional,
                }
            });
        case SHOW:
            return axios.get(`${config.basicUri}/${singleSource}`, {
                params: {
                    condition,
                    optional,

                }
            });
        case SHOW_ID:
            return axios.get(`${config.basicUri}/${sourceName}/${condition.id}?token=${condition.token}`,{
                params: {
                    optional,
                }
            });

        case SHOW_UNIQUE:
            return axios.get(`${config.basicUri}/${singleSource}/${condition.key}`);
        case CREATE:
            return axios.post(`${config.basicUri}/${singleSource}`, {
                params: {
                    condition,
                    optional,

                }
            });

        case CREATE_MANY:
            return axios.post(`${config.basicUri}/${sourceName}`, {
                params: {
                    condition,
                    optional,

                }
            });
        case UPDATE:
            return axios.patch(`${config.basicUri}/${singleSource}`, {
                params: {
                    condition,
                    optional,

                }
            });
        case UPDATE_MANY:
            return axios.put(`${config.basicUri}/${sourceName}`, {
                params: {
                    condition,
                    optional,

                }
            });
        case DELETE:
            return axios.patch(`${config.basicUri}/${sourceName}`, {
                params: {
                    condition,
                    optional,

                }
            });
        case DELETE_MANY:
            return axios.put(`${config.basicUri}/${sourceName}`, {
                params: {
                    condition,
                    optional,

                }
            });
        case DESTROY:
            return axios.delete(`${config.basicUri}/${singleSource}`, {
                params: {
                    condition,
                    optional,

                }
            });
        case DESTROY_MANY:
            return axios.delete(`${config.basicUri}/${sourceName}`, {
                params: {
                    condition,
                    optional,

                }
            });
    
        default:
            return new Promise((res: any, rej:any)=> res(UNKNOWN_METHOD));
    }

}