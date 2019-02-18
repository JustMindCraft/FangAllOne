import { observable, action } from "mobx";
import { api } from "../../api";
import { LIST } from "../../constants/API";

export class UserAdmin {
    @observable loading = true;

    @action loadUsers(){
        this.loading = true;

        return api('users', LIST, {
            
        }, {
            sort: {
                createdAt: -1,
            },
            page: 1,
            pagesize: 20,
        }).then(rlt=>{
            this.loading = false;
        })
    }

}



const userAdmin  = new UserAdmin();
export default userAdmin;