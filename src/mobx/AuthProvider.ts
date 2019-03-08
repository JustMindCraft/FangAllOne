import { CHECK_AUTH } from './../constants/API';
import { observable, computed, action } from "mobx";
import { auth } from "../api";

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