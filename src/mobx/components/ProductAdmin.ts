import { observable, IObservableArray } from "mobx";

export class ProductAdmin {
    @observable loading = true;
    readonly todos = observable<IObservableArray>([]);
}


const productAdmin = new ProductAdmin()
export default  productAdmin