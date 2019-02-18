import { observable, action, computed ,set} from "mobx";
import { api } from "../../api";
// import { auth } from "../../api";
// import { AUTH } from "../../constants/API";
import { UPDATE ,SHOW_UNIQUE} from './../../constants/API';

export class HomeBannerStore{
    @observable img=[]
    @observable loading=false;

    @action checkImg(value:any){
        
        return this.img = value;
    }

    @action uploadLoading(value:any){
        
        return this.loading = value;
    }

    @computed get userId(){
        return window.localStorage.getItem('fang_userId');

    }
    @computed get token(){
        return window.localStorage.getItem('fang_token');
    }

    @computed get mobximg() {
        return this.img
      }
    
    @action async upload(cb:Function=(msg:any)=>{}){
        console.log('1232131231231231232312312');
        this.loading = true;
        
        let img = this.img;
        console.log(img);
        console.log(this.userId);
        api('home_banners',UPDATE,{id:this.userId},{
            images:img
        }).then((rlt:any)=>{
            console.log(rlt);
            this.loading = false;
            
        })
        
        
    }
    @action async getImg(cb:Function=(msg:any)=>{}){
        
        console.log('走了这里！！！');
        this.loading = true;
        api('home_banners',SHOW_UNIQUE,{key:this.userId,token:this.token}).then((rlt:any)=>{
            console.log(rlt);
            this.loading = false;
            set(this.img,rlt.data.images)
            return  
            
            
        })
        
        
    }
}

const homeBannerStore = new HomeBannerStore()

export default homeBannerStore;