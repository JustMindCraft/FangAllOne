import List from "../list";
import { action } from "mobx";

export default class Users extends List{
    
    constructor(sourceName:string){
        super()
        this.source = sourceName;
    }
    @action block(index:number){
    }
}

export const users = new Users('users');