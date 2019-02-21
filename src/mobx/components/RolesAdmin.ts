import { observable, action, computed, IObservableArray } from "mobx";
import { api } from "../../api";
import { LIST, CREATE } from "../../constants/API";

class RolesAdmin {
    @observable loading = true;
    @observable list:Array<IObservableArray> = [];

    @computed get dataSource(){
        return this.list.slice();
    }

    @action listRoles(condition:any){
        return api('roles', LIST, {
            ...condition
        }, {
            sort: ["createdAt", 'DESC'],
            fields: ['name', 'id'],
            page: 1,
            pagesize: 10,
        }).then((rlt:any)=>{
            this.loading = false
            this.list = rlt.data;
        })
    }
    @action createRole(condition:any){
        return api('roles', CREATE, {
            ...condition
        }).then((rlt:any)=>{
            this.list.push(rlt.data)
            
        })
    }
}

const rolesAdmin  = new RolesAdmin();


export default rolesAdmin;