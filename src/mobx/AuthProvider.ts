import { observable, computed } from "mobx";

export  class AuthProvider {
    @observable logining = false;
    @observable regisering = false;

    @observable mobile = '';
    @observable sms="";
    @observable username = "";
    @observable email = "";
    @observable password = '';
    @observable passwordRepeat = "";
    @observable roles = [];
    @observable permissions=[];

    @computed get passwordEqual(){
        return this.password === this.passwordRepeat;
    }
}

const authProvider = new AuthProvider();

export default authProvider;