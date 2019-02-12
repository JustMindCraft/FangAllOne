import config from '../../config/';
import axios from 'axios';
import { observable, action } from "mobx";

export class App {
    @observable loading=true;
    @observable appId='';
    @observable name="";

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

 
}

const app = new App();


export default app;