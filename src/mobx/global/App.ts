import { UPDATE } from './../../constants/API';
import config from '../../config/';
import axios from 'axios';
import { observable, action } from "mobx";
import { api } from '../../api';

export class App {
    @observable loading=true;
    @observable appId='';
    @observable name="";

    @observable updating = false;

    @action getAppInfo(){
        this.loading = true;
        return axios.get(`${config.basicUri}/app?host=${window.location.host}`)
        .then((rlt:any)=>{
            this.loading = false;
            this.name = rlt.data.name;
            window.document.title = this.name; 
            this.appId = rlt.data.uuid;    
        });
        
    }

    @action changeName(value:string){
        this.name = value;
    }

    @action updateAppName(cb:Function=()=>{}){
        this.updating = true;
        if(this.name === ''){
            this.getAppInfo();
            return cb('应用名不能为空');
        }
        api('apps', UPDATE,
         {appId: this.appId}, 
         {name: this.name}
         ).then((rlt:any)=>{
            this.name= rlt.data.name;
            this.updating = false;
            cb("修改应用名成功");

            
        }).catch((err:any)=>{
            this.updating = false;
            cb("修改应用名失败");
        })
    }

 
}

const app = new App();


export default app;