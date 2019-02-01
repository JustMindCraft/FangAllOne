import { observable, action, computed } from "mobx";
import { auth } from "../../api";
import { AUTH } from "../../constants/API";

export class LoginFormStore{
    @observable username="";
    @observable password="";
    @observable logining = false;
    @observable isSuccess = false;
    @observable isSubmit = false;
    @observable mobileInput="";
    @observable smsInput="";
    @observable smsFetching = false;
    @observable model = 'sms'

    @computed get isPassed(){
        return this.username !== ''?
                this.password? true: false :
                false
    }
    @computed get smsIsPassed(){
        return this.mobileInput !== ''?
        this.smsInput? true: false :
        false
    }
    @computed get msgType(){
        return this.isSuccess? "success" : "error"
    }
    @computed get msg(){
        return this.isSuccess? "登录成功" : "用户名或者密码错误";
    }

    @action setModel(value:string){
        return this.model = value
    }
    @action reset(){
        this.username = "";
        this.password = "";
        this.logining = false;
        this.isSuccess = false;
        this.isSubmit = false;
        this.smsFetching =false;
        this.mobileInput = '';
        this.smsInput = '';

    }
    
    @action changeUsername(value:any){
        return this.username = value;
    }
    @action changePassword(value:any){
        return this.password = value;
    }
    @action changeMobileInput(value: any){
        return this.mobileInput = value;
    }
    @action changeSmsInput(value:any){
        return this.smsInput = value;
    }
    @action async login(cb:Function=(msg:any)=>{}){
        this.isSubmit = true;
        this.logining = true;
        let username = this.username;
        let password = this.password;
        if(this.model === "sms"){
            username = this.mobileInput;
            password = this.smsInput;

        }
        auth(AUTH, {
            username,
            password,
            model: this.model,
        }).then((rlt:any)=>{
            
            if(!rlt.data){
                this.logining = false;
                this.isSuccess = false;
                return cb(this.msg);

            }
            
            
            if(rlt.statusCode === 400){
                this.logining = false;
                this.isSuccess = false;
                return cb('服务器出错');
            }
            
            if(rlt.data.username === this.username){
                window.localStorage.setItem('fang_token', rlt.data.token);
                window.localStorage.setItem('fang_userId', rlt.data.id);
               this.isSuccess = true;
                return cb(this.msg);
                
            }
            this.logining = false;
            
            this.isSuccess = false;
            return cb(this.msg);
            
        }).catch((err:any)=>{
            this.logining = false;
            this.isSuccess = false;
            if(err.toString()==="Error: Request failed with status code 400"){
                return cb("服务器出错，请开发人员检查");
            }
            
        }).finally(()=>{
            this.logining = false;
            this.isSuccess = false;
        })
    }
}

const loginFormStore = new LoginFormStore()

export default loginFormStore;