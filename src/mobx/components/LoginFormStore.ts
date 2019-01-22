import { observable, action, computed } from "mobx";
import { auth } from "../../api";
import { AUTH } from "../../constants/API";

export class LoginFormStore{
    @observable username="";
    @observable password="";
    @observable logining = false;
    @observable isSuccess = false;
    @observable isSubmit = false;
    @computed get isPassed(){
        return this.username !== ''?
                this.password? true: false :
                false
    }
    @computed get msgType(){
        return this.isSuccess? "success" : "error"
    }
    @computed get msg(){
        return this.isSuccess? "登录成功" : "用户名或者密码错误"
    }
    @action reset(){
        this.username = "";
        this.password = "";
        this.logining = false;
        this.isSuccess = false;
    }
    
    @action changeUsername(value:any){
        return this.username = value;
    }
    @action changePassword(value:any){
        return this.password = value;
    }
    @action async login(){
        this.isSubmit = true;
        this.logining = true;
        auth(AUTH, {
            username: this.username,
            password: this.password
        }).then((rlt:any)=>{
            this.logining = true;
            console.log(rlt.data);
            
            if(rlt.data){
                this.isSuccess = true;
            }else{
                this.isSuccess = false;
                this.logining = false;
            }
            console.log(rlt);
            
        })
    }
}

const loginFormStore = new LoginFormStore()

export default loginFormStore;