import { observable,action } from "mobx";
import { api } from '../../api'
import { LIST,SHOW } from "../../constants/API";

export class ProductsAdmin {
    @observable loading = true;
    @observable productsList = [];
    @observable product = {}   
    @observable products = [] 
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
}


const productsAdmin = new ProductsAdmin()
export default  productsAdmin