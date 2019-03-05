import { observable,action,computed,IObservableArray } from "mobx";
import { api } from '../../api'
import { LIST,SHOW } from "../../constants/API";

export class ProductsAdmin {
    @observable validMsg = {
        name: '',
        name_zh: '',
        brief: '',
        storage:0
    }


    @observable loading = false;
    @observable pageLoading = false;
    @observable productsList = [];
    @observable product = {}   
    @observable products = [] 

    @observable name = '';
    @observable name_zh = '';
    @observable brief = '';
    @observable sales_volume = 0;
    @observable storage = 0

    @observable namePassed = true;
    @observable name_zhPassed = true;
    @observable briefPassed = true;
    @observable storagePassed = true;

    @observable images:Array<IObservableArray> = [];
    @observable cover:Array<IObservableArray> = [];
    @observable detailsImage:Array<IObservableArray> = [];

    @observable parameterCount= 0;
    @observable parameterName:Array<IObservableArray> = [];
    @observable parameterValue:Array<IObservableArray> = [];

    @observable specificationsCount= 0;
    @observable specificationsName:Array<IObservableArray> = [];
    @observable specificationsValue:Array<IObservableArray> = [];

    @observable agencyLevelPricesCount= 0;
    @observable agencyLevelPrices:Array<IObservableArray>= [];


    @observable productClassName = '水果';
    @observable productClasses= ['水果','器具','其他'];
    @observable isTool = false
    @observable isAppointment = false
    @observable isRecommend = false

    @action uploadLoading(value:any){
        
        return this.loading = value;
    }
    @action changeName(value:any){

        console.log(value);
        if(value==''){
            
            this.namePassed=false;
            this.validMsg.name = '商品名不能为空'
            console.log(this.namePassed)
            return
        }else{
            this.namePassed=true
            this.validMsg.name ='商品名可用'
            console.log(this.namePassed);

            return this.name = value;
        }
        


    }
    @action changeNameZh(value:any){
        console.log(value);
        if(value==''){
            
            this.name_zhPassed=false;
            this.validMsg.name_zh = '商品中文名不能为空'
            console.log(this.namePassed)
            return
        }else{
            this.name_zhPassed=true
            this.validMsg.name_zh ='商品中文名可用'
            console.log(this.namePassed);

            return this.name_zh = value;
        }
    }

    @action changeIsTool(value:any){
        console.log(value);
        let checked = this.isTool
        return this.isTool = !checked;
    }
    
    @action changeIsAppointment(value:any){
        console.log(value);
        let checked = this.isAppointment
        return this.isAppointment = !checked;
    }

    @action changeIsRecommend(value:any){
        console.log(value);
        let checked = this.isRecommend
        return this.isRecommend = !checked;
    }

    @action changeSalesVolume(value:any){
        console.log(value);
        return this.sales_volume = value;
    }
    @action changeBrief(value:any){
        console.log(value);
        if(value==''){
            
            this.briefPassed=false;
            this.validMsg.brief = '商品简介不能为空'
            console.log(this.briefPassed)
            return
        }else{
            this.briefPassed=true
            this.validMsg.brief ='商品简介可用'
            console.log(this.briefPassed);

            return this.brief = value;
        }
    }

    
    @action changeStorage(value:any){
        console.log(value);
        return this.storage = value;
    }

    @computed get getParameterCount(){
        return this.parameterCount
    }
    @action  changeParameter(value:any,key:number){
        console.log(key);
        
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



    @action  changeProductClassName(value:any){
        this.productClassName=value
    }

    @action  addParameter(value:any){
        let parameter_count = this.parameterCount
        this.parameterCount=parameter_count+1
    }

    @action  creatParameterName(i:number,value:any){
        let count = this.parameterCount
        let parameter=this.parameterName.slice()
        parameter[i]=value
        this.parameterName=parameter
    }
    @action  creatParameterValue(i:number,value:any){
        let count = this.parameterCount
        let parameter=this.parameterValue.slice()
        parameter[i]=value
        this.parameterValue=parameter
    }



    @action  addSpecifications(value:any){
        let specifications_count = this.specificationsCount
        this.specificationsCount=specifications_count+1
    }
    @action  creatSpecificationsName(i:number,value:any){
        let count = this.specificationsCount
        let specifications=this.specificationsName.slice()
        specifications[i]=value
        this.specificationsName=specifications
    }
    @action  creatSpecificationsValue(i:number,value:any){
        let count = this.specificationsCount
        let specifications=this.specificationsValue.slice()
        specifications[i]=value
        this.specificationsValue=specifications
    }
    
    @action  deleteSpecifications(i:number){
        let count = this.specificationsCount
        this.specificationsCount=count-1
        let specificationsName=this.specificationsName.slice()
        let specificationsValue=this.specificationsValue.slice()
        specificationsName.splice(i,1)
        specificationsValue.splice(i,1)
        this.specificationsName=specificationsName
        this.specificationsValue=specificationsValue
    }
    

    @action  deleteParameter(i:number){
        let count = this.parameterCount
        this.parameterCount=count-1
        let parameterName=this.parameterName.slice()
        let parameterValue=this.parameterValue.slice()
        parameterName.splice(i,1)
        parameterValue.splice(i,1)
        console.log('剩余参数名'+parameterName);
        console.log('剩余参数值'+parameterValue);
        this.parameterName=parameterName
        this.parameterValue=parameterValue
    }

    @action  addAgencyLevelPrices(value:any){
        let agencyLevelPrices_count = this.agencyLevelPricesCount
        this.agencyLevelPricesCount=agencyLevelPrices_count+1
    }
    
    @action  creatAgencyLevelPrices(i:number,value:any){
        let count = this.agencyLevelPricesCount
        let agencyLevelPrices=this.agencyLevelPrices.slice()
        agencyLevelPrices[i]=value
        this.agencyLevelPrices=agencyLevelPrices
    }

    
    @action  deleteAgencyLevelPrices(i:number){
        let count = this.agencyLevelPricesCount
        this.agencyLevelPricesCount=count-1
        let agencyLevelPrices=this.agencyLevelPrices.slice()
        agencyLevelPrices.splice(i,1)
        this.agencyLevelPrices=agencyLevelPrices
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


    @computed get allPassed(){
        return this.namePassed && this.name_zhPassed && this.briefPassed;
    }

    
    @action async creatProduct(cb:Function=(msg:any)=>{}){
        this.pageLoading = true;


        let name = this.name;
        let name_zh = this.name_zh;
        let brief = this.brief;
        let sales_volume = this.sales_volume;
        let storage =this.storage;
        let images = this.images.slice();
        let cover = this.cover.slice();
        let detailsImage = this.detailsImage.slice();
        let parameterCount=this.parameterCount;
        let parameterName= this.parameterName.slice();
        let parameterValue= this.parameterValue.slice();
        let agencyLevelPricesCount=this.agencyLevelPricesCount;
        let addAgencyLevelPrices = this.agencyLevelPrices.slice();
        let specificationsCount  =this.specificationsCount;
        let specificationsName = this.specificationsName.slice();
        let specificationsValue = this.specificationsValue.slice();
        let productClassName = this.productClassName;
        let productClasses = this.productClasses.slice();
        let isTool=this.isTool;
        let isAppointment=this.isAppointment;
        let isRecommend=this.isRecommend

      

        let parameters=[]
        for(let i = 0;i<parameterCount;i++){
            parameters.push({parameterName:parameterName[i],parameterValue:parameterValue[i]})
        }

        let specifications=[]
        for(let i = 0;i<specificationsCount;i++){
            specifications.push({specificationsName:specificationsName[i],specificationsValue:specificationsValue[i]})
        }

        
        let productInfor = {name,
                            name_zh,
                            brief,
                            sales_volume,
                            storage,
                            images,
                            cover,
                            detailsImage,
                            parameters,
                            specifications,
                            agencyLevelPricesCount,
                            addAgencyLevelPrices,
                            productClassName,
                            productClasses,
                            isTool,
                            isAppointment,
                            isRecommend
                        }

        console.log(productInfor);
        

        

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