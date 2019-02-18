import { observable } from "mobx";

export class ProductAdmin {
    @observable loading = true;
}


const productAdmin = new ProductAdmin()
export default  productAdmin