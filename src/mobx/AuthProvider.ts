import { CHECK_AUTH } from './../constants/API';
import { observable, computed, action } from "mobx";
import { auth } from "../api";

export  class AuthProvider {

    @observable logining = false;
    @observable regisering = false;
    @observable smsFetching = false;
    

    @observable mobile = '';
    @observable sms="";
    @observable username = "";
    @observable email = "";
    @observable password = '';
    @observable passwordRepeat = "";
    @observable roles = [];
    @observable permissions=[];
    @observable loginModel = 'sms';//登录方式
    @observable isCounting  = false;
    @observable smsCountTimes = 60;
    @observable counter:any;

    //valid
    @observable validing = false;//是否正在验证


    @computed get usernameValid(){
        return this.username && this.username!=="";
    } 

    @computed get smsValid(){
        return this.sms && this.sms !== "";
    }

    @computed get mobileValid(){
        return this.mobile && this.mobile !== "";
    }

    @computed get passwordValid(){
        return this.password && this.password !== "";
    }

    @computed get loginValid(){
        if(this.loginModel === "sms"){
            return this.mobileValid && this.smsValid;
        }
        if(this.loginModel==="password"){
            return this.usernameValid && this.passwordValid;
        }
    }

    @computed get passwordEqual(){
        return this.password === this.passwordRepeat;
    }
    @computed get isLogined(){
        return window.localStorage.getItem('fang_token');
    }

    @computed get token(){
        return window.localStorage.getItem('fang_token');
    }

    @computed get userId(){
        return window.localStorage.getItem('fang_userId');
    }

    @action reset = () => {
        this.username = "";
        this.logining = false;
        this.mobile = "";
        this.sms="";
        this.email ="";
        this.password = "";
        this.roles = [];
        this.permissions = [];
        this.loginModel = 'sms';
        this.validing = false;
    }

    @action setLoginModel = (model: string) =>{
        this.loginModel = model;
    }
    @action setUsername(username: string){
        this.username = username;
    }
    @action setMobile(mobile:string){
        this.mobile = mobile;
    }
    @action setEmail(email: string) {
        this.email = email;
    }
    @action setPassword= (password: string) => {
        this.password = password;
    }
    @action setPasswordRepeat = (passwordRepeat:string) => {
        this.passwordRepeat = passwordRepeat;
    }

    @action setRoles(roles:Array<never>){
        this.roles = roles;
    }

    @action setPermissions(permissions:Array<never>){
        this.permissions = permissions;
    }

    @action logOut = ()=> {
        window.localStorage.removeItem('fang_token');
        window.localStorage.removeItem('fang_userId');
        this.reset();
    }

    @action checkAuth = (cb = (m:string)=>{}) => {
        const token = this.token;
            
            if (!token) {
                window.localStorage.removeItem('fang_token');
                window.localStorage.removeItem('fang_userId');
                return cb('您已登出');

            }
        
            auth(CHECK_AUTH, token).then((rlt:any)=>{
                if(rlt.data.toString() === this.userId){
                    
                    return true;
                }
                window.localStorage.removeItem('fang_token');
                window.localStorage.removeItem('fang_userId');
                return cb('您已登出');
                
            }).catch((err:any)=>{
               if(err.toString()==='Error: Request failed with status code 401'){
                   window.localStorage.removeItem('fang_token');
                   window.localStorage.removeItem('fang_userId');
                    return cb('您已登出');

               }
               
            });
    }

    

    
}

const authProvider = new AuthProvider();

export default authProvider;