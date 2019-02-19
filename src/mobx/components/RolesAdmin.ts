import { observable, action } from "mobx";
import { api } from "../../api";
import { LIST, CREATE } from "../../constants/API";

class RolesAdmin {
    @observable loading = true;
    @observable list = [];
    @action listRoles(condition:any){
        return api('roles', LIST, {
            ...condition
        }, {
            sort: ["createdAt", 'DESC'],
            fields: ['name', 'id'],
            page: 1,
            pagesize: 10,
        }).then((rlt:any)=>{
            console.log(rlt);
            this.loading = false
            this.list = rlt.data;
        })
    }
    @action createRole(condition:any){
        return api('roles', CREATE, {
            ...condition
        }).then((rlt:any)=>{
            console.log(rlt);
            
        })
    }
}

const rolesAdmin  = new RolesAdmin();


export default rolesAdmin;