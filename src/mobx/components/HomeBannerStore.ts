import { observable, action, computed } from "mobx";
import { auth } from "../../api";
import { AUTH } from "../../constants/API";

export class HomeBannerStore{
    @observable img=[]
    @action async upload(cb:Function=(msg:any)=>{}){
        console.log('1232131231231231232312312');
        
        let img = this.img;
        console.log(img);
        
    }
}

const homeBannerStore = new HomeBannerStore()

export default homeBannerStore;