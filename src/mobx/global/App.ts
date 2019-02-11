import { observable, action } from "mobx";

export class App {
    @observable loading=false;
    @observable msg='';
    @observable content="";

    @action getAppInfo(){
        
    }

 
}

const app = new App();


export default app;