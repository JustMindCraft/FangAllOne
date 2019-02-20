import { observable, action, computed ,set} from "mobx";
import { api } from "../../api";
// import { auth } from "../../api";
// import { AUTH } from "../../constants/API";
import { UPDATE ,SHOW_UNIQUE} from './../../constants/API';

export class HomeBannerStore{
    
    @observable banners: Array<string> = [];

    @observable loading=false;


    @action checkImg(value:any){
        
        return this.banners = value;
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
        return this.banners.slice()
      }
    
    @action async upload(cb:Function=(msg:any)=>{}){
        this.loading = true;
        
        let home_banners = this.banners;
        console.log(home_banners);
        console.log(this.userId);
        api('home_banners',UPDATE,{id:this.userId},{
            images:home_banners
        }).then((rlt:any)=>{
            console.log(rlt);
            this.loading = false;
            if(rlt.status==200){
                return cb('图片上传成功')
            }else{
                return cb('图片上传失败，请稍后再试')
            }
            
        })
        
        
    }
    @action async getImg(cb:Function=(msg:any)=>{}){
        
        this.loading = true;
        api('home_banners',SHOW_UNIQUE,{key:this.userId,token:this.token}).then((rlt:any)=>{
            this.loading = false;
            set(this.banners,rlt.data.images)
            // return  
        }
        ).catch((err:any)=>{
            this.loading = false;
        })
        
        
    }
}

const homeBannerStore = new HomeBannerStore()

export default homeBannerStore;