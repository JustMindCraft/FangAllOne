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
        this.isSubmit = false;
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
           
            if(!rlt.data){
                this.logining = false;
                return this.isSuccess = false;
            }
            
            if(rlt.data.username === this.username){
                window.localStorage.setItem('fang_token', rlt.data.token);
                window.localStorage.setItem('fang_userId', rlt.data.id);
                return this.isSuccess = true;
            }
            this.logining = false;
            return this.isSuccess = false;
            
        })
    }
}

const loginFormStore = new LoginFormStore()

export default loginFormStore;