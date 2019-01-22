import { IUser } from './../../../interfaces/model';
import {observable, action, computed} from "mobx";
import Show from '../show';

export class User extends Show{
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

const user = new User();
export default user;