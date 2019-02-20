import { observable, action } from "mobx";

export class AdminPanel {
    @observable title = "";
    @observable dataSource = [];
    @observable singleDataSource = {};
    @observable sourceName = "users";
    @observable loading = true;
    @observable page=1;
    @observable pagesize = 25;
    @observable sortDirection = 'up';//倒序还是逆序


    @action setTitle(title:string){
        return this.title = title;
    }

    @action setSourceName(sourceName:string){
        return this.sourceName = sourceName;
    }

    @action sort(){
        
    }

    @action getDataSource(){

    }

    @action getSingleDataSource(id:number){

    }

    @action sortDataSource(){

    }
    @action search(){

    }
    @action betweenCreatedTime(time:TimeRanges){

    }

    @action betweenUpdatedTime(time:TimeRanges){

    }

    @action updateSingleSource(condition:any, params:any){

    }

    @action updateDataSource(condition:any, params: any){

    }
    @action destoryDataSource(condition:any, params: any){

    }
    @action destorySingleSource(condition:any, params:any){

    }
}


const adminPanel = new AdminPanel();


export default adminPanel;