import { observable, computed, action } from "mobx";
import { api } from "../../api";
import { LIST, DELETE_MANY } from "../../constants/API";

export default class List {
    @observable data=[];
    @observable dataIds = [];
    @observable unSelectedItems:Array<number> = [1, this.data.length];
    @observable maxLength=125;
    @observable page=1;
    @observable pageSize=25;
    @observable loading=true;
    @observable loadingMsg='';
    @observable source:string="";
    @observable selectCount = 0;
    @observable selectedItems:Array<number> = [];
    @observable filter={}
    
    
    @computed get allSelected(){
        return this.data.length === this.selectCount;
    }

    @action selcetOne(index:number){
        this.selectCount++;
        this.selectedItems.push(index);
        this.unSelectedItems = this.unSelectedItems.filter(index=>this.selectedItems.includes(index));
    }

    @action unSelectOne(index:number){
        this.selectCount--;
        this.unSelectedItems.push(index);
        this.selectedItems = this.selectedItems.filter(index=>this.unSelectedItems.includes(index));

    }
    @action selectAll(){
        this.selectCount = this.data.length;
        this.selectedItems = [1, this.data.length];
        this.unSelectedItems = [];
    }

    @action unSelectAll(){
        this.selectCount = this.data.length;
        this.unSelectedItems = [1, this.data.length];
        this.selectedItems = [];
    }

    @action search(condition:any, optional:any){
        api(this.source, LIST, condition, optional).then((rlt:any)=>{
            this.data = rlt.data;
        })
    }

    @action query(optional:any){
        api(this.source, LIST, this.filter, optional).then((rlt:any)=>{
            this.data = rlt.data;
        })
    }

    @action deleteAllSelected(){
        api(this.source, DELETE_MANY, )
    }

}