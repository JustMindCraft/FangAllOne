import { CHECK_AUTH, SHOW_ID } from './../../constants/API';
import { observable, computed, action } from "mobx";
import { auth, api } from "../../api";

export class UserSession {
    @observable username="";
    @observable isLogined = true;
    @observable fetching = false;

    @computed get token(){
        return window.localStorage.getItem('fang_token');
    }
    @computed get userId(){
        return window.localStorage.getItem('fang_userId');

    }

    @action logOut(){
        window.localStorage.removeItem('fang_token');
        window.localStorage.removeItem('fang_userId');
        this.username = "";
        this.isLogined = false;
        this.fetching = false;
    }

    @action getUserInfo(){
        this.fetching = true;
        if(!this.userId){
            this.isLogined = false;
            window.localStorage.removeItem('fang_token');
            return window.localStorage.removeItem('fang_userId');
        }
        api('users',SHOW_ID, {id: this.userId, token: this.token}, {
            fields: ['username', 'id']
        }).then((rlt:any)=>{
            this.fetching = false;
            
            if(rlt.data.id.toString() === this.userId){
                
                this.isLogined = true;
                return this.username = rlt.data.username;
            }else{
                this.isLogined = false;
                window.localStorage.removeItem('fang_token');
                window.localStorage.removeItem('fang_userId');
            }
            
        })
    }
    @action checkLogined(){
            const token = this.token;
            
            if (!token) {
                return this.isLogined = false;
            }
            this.isLogined = true;//预期是登录成功，这样可以保障登录或者注册一瞬间，不会被登出
        
            auth(CHECK_AUTH, token).then((rlt:any)=>{
                if(rlt.data.toString() === this.userId){
                    
                    return this.isLogined = true;
                }
                return this.isLogined = false;
                
                
            }).catch((err:any)=>{
               if(err.toString()==='Error: Request failed with status code 401'){
                   return this.isLogined = false;
               }
               
            });
            
       
    }
    @action setUsername(value:any){
        return this.username = value;
    }

}

const currentUser = new UserSession();
export default currentUser;