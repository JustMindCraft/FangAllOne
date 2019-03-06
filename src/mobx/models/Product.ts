import { observable, action } from "mobx";
import { api } from "../../api";
import { SHOW_ID } from "../../constants/API";

class Product {
  @observable id = '';
  @observable name = '';
  @observable description = "";
  @observable cover = "";
  @observable loading = false;

  @action setId = (id:string) => {
    console.log(id);
    
    this.id = id;
  }
  @action reset = ()=>{
    this.id = '';
    this.name = "";
    this.description = "";
    this.cover = "";
    this.loading = false;
  }

  @action getRemoteProductById = () => {
      this.loading = true;
      return api("products", SHOW_ID, {id: this.id}).then((rlt:any)=>{
        const {
          name, description, cover
        } = rlt.data;
        console.log(rlt.data);
        
        this.name = name;
        this.description = description;
        this.cover = cover;
        
      })
  }



}

const product  = new Product();

export default product;