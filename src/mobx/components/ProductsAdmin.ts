import { observable,action,computed,IObservableArray } from "mobx";
import { api } from '../../api'
import { LIST,SHOW } from "../../constants/API";

export class ProductsAdmin {
    @observable loading = false;
    @observable productsList = [];
    @observable product = {}   
    @observable products = [] 
    @observable name = '';
    @observable name_zh = '';
    @observable brief = '';
    @observable sales_volume = 0;
    @observable images:Array<IObservableArray> = [];
    @observable cover:Array<IObservableArray> = [];
    @observable detailsImage:Array<IObservableArray> = [];
    @observable parameterCount= 0;


    @action uploadLoading(value:any){
        
        return this.loading = value;
    }
    @action changeName(value:any){

        console.log(value);
        
        return this.name = value;
    }
    @action changeNameZh(value:any){
        console.log(value);
        return this.name_zh = value;
    }
    @action changeSalesVolume(value:any){
        console.log(value);
        return this.sales_volume = value;
    }
    @action changeBrief(value:any){
        console.log(value);
        return this.brief = value;
    }

    @computed get getParameterCount(){
        return this.parameterCount
    }
    @action  changeImages(value:any,type:string){
        console.log(type);
        
        switch(type){
            case "images":
            this.images= value;
            break;
            case "cover":
            this.cover = value;
            break;
            case "detailsImage":
            this.detailsImage=value;
            break
        }
    }

    @action  creatParameter(value:any){
        let parameter_count = this.parameterCount
        this.parameterCount=parameter_count+1
    }

    @action  dataSource(type:string){
        switch(type){
            case "images":
            return this.images.slice();
            case "cover":
            return this.cover.slice();
            case "detailsImage":
            return this.detailsImage.slice();
        }
        
    }



    @action listProducts(){
        return api('products', LIST, {
        }, {
            sort: ["createdAt", 'DESC'],
            fields: ['name', 'id'],
            page: 1,
            pagesize: 10,
        }).then((rlt:any)=>{
            console.log(rlt);
            this.loading = false
            this.productsList = rlt.data;
        })
    }
    @action findOneProductById(id:string){
        return api('products', SHOW,{
            id:id
        }).then((rlt:any)=>{
            this.loading = false
            this.product = rlt
        })
    }
    @action findProductsByName(name:string){
        return api('products', SHOW,{
            name:name
        }).then((rlt:any)=>{
            this.loading = false
            this.product = rlt
        })
    }



    @action async getImage(cb:Function=(msg:any)=>{}){
        
        // this.loading = true;
        // api('home_banners',SHOW_UNIQUE,{key:this.userId,token:this.token}).then((rlt:any)=>{
        //     this.loading = false;
        //     set(this.banners,rlt.data.images)
        //     // return  
        // }
        // ).catch((err:any)=>{
        //     this.loading = false;
        // })
        
        
    }
}


const productsAdmin = new ProductsAdmin()
export default  productsAdmin