import { SHOW_UNIQUE, REGISTER } from './../../constants/API';
import { observable, computed, action } from "mobx";
import { api, auth } from "../../api";
import currentUser from '../global/UserSession';

export class RegisterFormStore {


    @observable validMsg = {
        username: '',
        password: '',
        passwordRepeat: ''
    }

    @observable username = '';
    @observable usernameExist = false;
    @observable checkingUsernameExist = false;
    @observable usernamePassed = false;

 

    @observable password = '';
    @observable passwordPassed = false;



    @observable passwordRepeat = '';


    @observable startInput = false;


    @observable registering = false;
    @observable isSuccess = false;
   
    @computed get validUsername(){
        //用户名正则，4到16位（字母，数字，下划线，减号）
    
        const uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
        const matchRlt  = uPattern.test(this.username);
        
        return matchRlt;
    }
    @computed get validPassword(){
        // 最短6位，最长16位 {6,16}
        // 可以包含小写大母 [a-z] 和大写字母 [A-Z]
        // 可以包含数字 [0-9]
        // 可以包含下划线 [ _ ] 和减号 [ - ]
        const pPattern = /^[\w_-]{6,16}$/;
        return pPattern.test(this.password);
    }

    @computed get passwordRepeatPassed(){
        return this.password === this.passwordRepeat;
    }

    @computed get allPassed(){
        return this.usernamePassed && this.passwordPassed && this.passwordRepeatPassed;
    }
   
    @action  checkUsernameExist(){
        this.checkingUsernameExist = true;
        this.validMsg.username ="正在检查用户名是否可用";

        api('users', SHOW_UNIQUE, {key: this.username})
        .then((rlt:any)=>{
            if(rlt.status===204){
                this.usernameExist = false;
                this.checkingUsernameExist = false;
            }
            if(rlt.data.username === this.username){
                
                this.usernameExist = true;
                this.validMsg.username ="用户名被占用";
                this.checkingUsernameExist = false;
                this.usernamePassed = false;

            }else{
                this.validMsg.username ="恭喜用户名可用";
                this.usernamePassed = true;
            }
            
        })
    }

    @action changeUsername(value:any){
        this.startInput = true;
        this.username = value;
       console.log(value);
       
        if(!this.validUsername && this.username !== '' ){
            
            this.validMsg.username ="用户名规则，4到16位（字母，数字，下划线，减号）";
        }
        if(this.username !== '' && this.validUsername){
            
            this.validMsg.username ="正在检查用户名是否可用";
            this.checkUsernameExist();
        }
    }
   

    @action changePassword(value:any){
        this.startInput = true;
        this.password = value;

        if(!this.validPassword && this.password !== '' ){
            
            return this.validMsg.password ="密码６-16位，（字母，数字，下划线，减号）";
        }
        if(this.password === ''){
            return this.validMsg.password ="请输入密码";
        }
        
        this.passwordPassed = true;
        return this.validMsg.password ="密码合格通过";

       
    }
    @action changePasswordRepeat(value:any){
        
        this.startInput = true;
        return this.passwordRepeat = value;
    }

    @action register(){
        this.registering = true;
        auth(REGISTER, {
            username: this.username,
            password: this.password
        }).then((rlt:any)=>{
            if(rlt.data.username === this.username){
                currentUser.setUsername(rlt.data.username);
                window.localStorage.setItem('fang_token', rlt.data.token);
                window.localStorage.setItem('fang_userId', rlt.data.id);
                this.isSuccess = true;
            }else{
                this.isSuccess = false;
            }
            
        })
    }
    
}

const registerFormStore = new RegisterFormStore();


export default registerFormStore;