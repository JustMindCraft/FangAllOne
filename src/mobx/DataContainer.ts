import { LIST } from './../constants/API';
import { observable, action } from "mobx";
import { api } from "./../api";

export class DataContainer {
    @observable title = "";
    @observable dataSource = [];
    @observable columns = [];
    @observable singleDataSource = {};
    @observable sourceName = "users";
    @observable loading = true;
    @observable actionLoading = true;
    @observable page=1;
    @observable pagesize = 25;
    @observable sortDirection = 'DESC';//倒序还是逆序
    @observable sortColumn = "id";
    @observable condition = {}


    @action setTitle(title:string){
        return this.title = title;
    }

    @action setSourceName(sourceName:string){
        return this.sourceName = sourceName;
    }


    @action getList(optional:any){
        return api(this.sourceName as any, LIST, this.condition, optional);
    }

    @action sort(sortColumn:string, sortDirection:string ){
        this.loading = true;
        return this.getList({sort: [sortColumn, sortDirection]}).then((rlt:any)=>{
            this.dataSource = rlt.data;
            this.loading = false;
        })
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


const dataContainer = new DataContainer();


export default dataContainer;