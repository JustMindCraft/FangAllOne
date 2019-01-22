import { REGISTER, SHOW_UNIQUE } from './../../constants/API';
import { observable, computed, action } from "mobx";
import { api, auth } from "../../api";
import currentUser from '../global/UserSession';

export class RegisterFormStore {
    @observable loading= false;
    @observable username = '';
    @observable password = '';
    @observable passwordRepeat = '';
    @observable startInput = false;
    @observable isSuccess = false;
    @observable registering = false;
    @observable checkingUsernameExist = false;
    @observable usernameExist = false;
    @observable submitBtnHidden = false;
    @computed  get passwordMatch(){
        return this.password === this.passwordRepeat
    }
    @computed get hasMsg(){
        return this.startInput ? 
        this.username === ''? true: false:
        false;
    }
    @computed get validUsername(){
        //用户名正则，4到16位（字母，数字，下划线，减号）
        const uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
        return uPattern.test(this.username);
    }
    @computed get validPassword(){
        // 最短6位，最长16位 {6,16}
        // 可以包含小写大母 [a-z] 和大写字母 [A-Z]
        // 可以包含数字 [0-9]
        // 可以包含下划线 [ _ ] 和减号 [ - ]
        const pPattern = /^[\w_-]{6,16}$/;
        return pPattern.test(this.password);
    }
    @computed get msgType(){
            return this.validUsername ? 
                        this.validPassword ? 
                            this.passwordMatch ? 
                                !this.checkingUsernameExist?
                                    !this.usernameExist ? "success":"error"
                                : 'warning'
                            : 'error' 
                        :'error'
                    :'error'
        
    }
    @computed get msg(){
        
            return this.validUsername?  
                        this.validPassword? 
                            this.passwordMatch? 
                                !this.checkingUsernameExist?
                                    !this.usernameExist ? "输入检查完毕":"用户名被占用" 
                                : "正在检查用户是否可用"
                            :'两次密码输入不一致'
                        :'密码６-16位（字母，数字，下划线，减号）'
                    :'用户名应当符合4到16位（字母，数字，下划线，减号）'
       
        
       
            
    }
   
    @computed get isPassed(){
        return this.validUsername ? 
                this.validPassword ? 
                    this.passwordMatch ? 
                        !this.checkingUsernameExist?
                        !this.usernameExist ? true:false
                        : false
                    : false 
                : false
               : false
    }

    @action  checkUsernameExist(){
        this.checkingUsernameExist = true;
        api('users', SHOW_UNIQUE, {key: this.username})
        .then((rlt:any)=>{
            console.log(rlt.data.token);
            if(rlt.status===204){
                this.usernameExist = false;
                this.checkingUsernameExist = false;
                return true;
            }
            if(rlt.data.username === this.username){
                this.usernameExist = true;
                this.checkingUsernameExist = false;
                return false;
            }
            
        })
    }

    @action changeUsername(value:any){
        this.startInput = true;
        this.username = value;
        return this.checkUsernameExist();
    }
   

    @action changePassword(value:any){
        this.startInput = true;
        return this.password = value;
    }
    @action changePasswordRepeat(value:any){
        this.startInput = true;
        return this.passwordRepeat = value;
    }
    @action register(){
        this.registering = true;
        this.submitBtnHidden = true;
        auth(REGISTER, {
            username: this.username,
            password: this.password
        }).then((rlt:any)=>{
            console.log(rlt);
            
            
            if(rlt.data.username === this.username){
                currentUser.username = rlt.data.username;
                window.localStorage.setItem('fang_token', rlt.data.token)
                this.isSuccess = true;
            }else{
                this.isSuccess = false;
            }
            
        })
    }
    @action reset(){
        this.loading= false;
        this.username = '';
        this.password = '';
        this.passwordRepeat = '';
        this.startInput = false;
        this.isSuccess = false;
        this.registering = false;
        this.checkingUsernameExist = false;
        this.usernameExist = false;
        this.submitBtnHidden = false;
    }
}

const registerFormStore = new RegisterFormStore();


export default registerFormStore;