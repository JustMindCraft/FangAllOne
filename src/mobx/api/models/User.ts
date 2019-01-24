import { IUser } from './../../../interfaces/model';
import {observable, action, computed} from "mobx";
import Show from '../show';

export default class User extends Show{
    constructor(sourceName:string){
        super();
        this.source = sourceName;
    }
    @observable public dataShow:IUser = {
        username: '',
        email: '',
        id: ''
    };
    @observable public source = "users";
   
    @computed get token(){
       return window.localStorage.getItem('fang_token');
    }
   
}

export const user = new User('users');
