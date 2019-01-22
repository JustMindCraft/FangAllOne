import {observable, computed } from "mobx";
import { api } from "../../api";
import { SHOW } from "../../constants/API";
export default class Show {
    @observable public dataShow:any;
    @observable public loading:boolean=false;
    @observable public source:string="";
    
    @computed get total() {
        return  this.dataShow;
    }
    getById(id:any, optional:any={}):Promise<any>{
        return api(this.source, SHOW, {id}, {optional});
    }
    getByCondition(condition:any={}, optional:any={}):Promise<any>{
        return api(this.source, SHOW, {condition}, {optional})
    }
}