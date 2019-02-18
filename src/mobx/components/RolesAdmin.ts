import { observable, action } from "mobx";
import { api } from "../../api";
import { LIST } from "../../constants/API";

class RolesAdmin {
    @observable loading = true;
    @observable list = [];
    @action listRoles(){
        return api('roles', LIST, {
           name: 'superAdmin',
        }, {
            sort: ["createdAt", 'DESC'],
            fields: ['name', 'id'],
            page: 1,
            pagesize: 10,
        }).then((rlt:any)=>{
            console.log(rlt);
            
            this.list = rlt.data;
        })
    }
}

const rolesAdmin  = new RolesAdmin();


export default rolesAdmin;