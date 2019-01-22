import { observable, computed, action } from "mobx";

export class UserSession {
    @observable username="";
    @observable userId="";

    @computed get token(){
        return window.localStorage.getItem('fang_token');
    }
    @action setUsername(value:any){
        return this.username = value;
    }
    @action setUserId(value: any){
        return this.userId = value;
    }

}

const currentUser = new UserSession();
export default currentUser;