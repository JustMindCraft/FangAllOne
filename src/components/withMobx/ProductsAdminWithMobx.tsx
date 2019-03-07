import React from 'react';
import ProductsAdminForm from '../stateless/ProductsAdminForm';
import Upload from './Upload';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { observer, inject } from 'mobx-react';
import { constants } from 'http2';
import { Link } from 'react-router-dom';
import msg from '../../mobx/global/InformationMsg';
import CircularProgress from '@material-ui/core/CircularProgress';
const RegisterLink = (props:any) => <Link to="/dashboard/my_shop" {...props} />



interface ProductsAdminWithMobxProps {
    store: any,
    redirectSuccess: Function,
}
interface IProductsAdminState{
    parameterName: any,
    parameterValue:any
  }
@observer
class ProductsAdminWithMobx extends React.Component<ProductsAdminWithMobxProps,IProductsAdminState>{
  
    constructor(props:any){
        super(props);
        this.state ={
        parameterName:[],
        parameterValue:[]
        }
    }
    
    componentDidMount(){
        const { store } = this.props;
    }
    componentWillReceiveProps(){
        const { store } = this.props;
    }
    handleInputChange = (event:any, key:string) => {
        const {store} = this.props;
        
        const value = event.target.value;
        switch (key) {
            case "name":
                store.changeName(value);
                break;
            case "name_zh":
                store.changeNameZh(value);
                break;
            case 'sales_volume':
                store.changeSalesVolume(value);
                break;
            case 'brief':
                store.changeBrief(value);
                break;
            case 'storage':
                store.changeStorage(value);
                break;
            default:
                break;
        }
        
    }

    handleInputChecked= (event:any, key:string) => {
        const {store} = this.props;
        // console.log(store);
        
        const value = event.target.value;
        switch (key) {
            case "isTool":
                store.changeIsTool(value);
                break;
            case "isAppointment":
                store.changeIsAppointment(value);
                break;
            case 'isRecommend':
                store.changeIsRecommend(value);
                break;
       
            default:
                break;
        }
        
    }


    handleSelect=(event:any)=>{
        const {store} = this.props;
        store.changeProductClassName(event.target.value)
    }
    handleChangeParameterName=(event:any,i:any)=>{
        const {store} = this.props
        const value = event.target.value;
        const arr = new Array(store.parameterCount)
        arr[i]=value
        store.creatParameterName(i,value)
    }
    handleChangeParameterValue=(event:any,i:any)=>{
        const {store} = this.props
        const value = event.target.value;
        const arr = new Array(store.parameterCount)
        arr[i]=value
        store.creatParameterValue(i,value)
    }

    handleChangeSpecificationsName=(event:any,i:any)=>{
        const {store} = this.props
        const value = event.target.value;
        const arr = new Array(store.specificationsCount)
        arr[i]=value
        store.creatSpecificationsName(i,value)
    }

    handleChangeSpecificationsValue=(event:any,i:any)=>{
        const {store} = this.props
        const value = event.target.value;
        const arr = new Array(store.specificationsCount)
        arr[i]=value
        store.creatSpecificationsValue(i,value)
    }

    handleChangeAgencyLevelPrices=(event:any,i:any)=>{
        const {store} = this.props
        const value = event.target.value;
        const arr = new Array(store.agencyLevelPricesCount)
        arr[i]=value
        store.creatAgencyLevelPrices(i,value)
    }

    addParameter=(event:any)=>{
        const {store} =this.props;
        store.addParameter();
    }

    
    addSpecifications=(event:any)=>{
        const {store} =this.props;
        store.addSpecifications();
    }

    addAgencyLevelPrices=(event:any)=>{
        const {store} =this.props;
        store.addAgencyLevelPrices();
    }

    creatproduct=()=>{
        const {store} =this.props;
        console.log(store);
        store.creatProduct((m:string)=>{
            console.log(m);
            if(m==='创建商品成功'){
                this.props.redirectSuccess(true)
            }
            msg.show(m);
        });
        
    }

    cancel=()=>{
        const {store} =this.props;
        store.cancel()
    }

    deleteSpecifications=(i:number)=>{
        const {store} =this.props;
        store.deleteSpecifications(i)
    }

    
    deleteParameter=(i:number)=>{
        const {store} =this.props;
        store.deleteParameter(i)
    }

    
    deleteAgencyLevelPrices=(i:number)=>{
        const {store} =this.props;
        store.deleteAgencyLevelPrices(i)
    }

    render (){
        const { store } = this.props;
        let parameter
        let parameterArray=[]
        for(let i = 0;i<store.parameterCount;i++){
            parameterArray.push(
                <div key={i} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingLeft:'10px'}}>
                    <TextField
                        id="standard-name"
                        label="参数名"
                        name="name"
                        value={store.parameterName.slice()[i]}
                        margin="normal"
                        // key={2*i}
                        style={{width:'35%'}}
                        onChange={(event:any)=>this.handleChangeParameterName(event,i)}
                        />

                        <TextField
                        id="standard-uncontrolled"
                        label="参数值"
                        name="value"
                        value={store.parameterValue.slice()[i]}
                        margin="normal"
                        // key={2*i+1}
                        style={{marginLeft:'5px',width:'35%'}}
                        onChange={(event:any)=>this.handleChangeParameterValue(event,i)}
                        />
                        <div style={{display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        paddingTop:'20px',
                        marginLeft:'5px'
                        }}>
                        <Button 
                        color="secondary" 
                        variant="contained" 
                        key={i}  
                        style={{width:'20%'}}
                        onClick={()=>this.deleteParameter(i)}>
                        删除
                       </Button>
                        </div>
                        
                </div>
            )
        }
        parameter=parameterArray




        let specifications
        let specificationsArray=[]
        for(let i = 0;i<store.specificationsCount;i++){
            specificationsArray.push(
                <div key={i} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingLeft:'10px'}}>
                    <TextField
                        id="standard-name"
                        label="规格名"
                        name="name"
                        value={store.specificationsName.slice()[i]}
                        margin="normal"
                        // key={2*i}
                        style={{width:'35%'}}
                        onChange={(event:any)=>this.handleChangeSpecificationsName(event,i)}
                        />

                        <TextField
                        id="standard-uncontrolled"
                        label="规格值"
                        name="value"
                        value={store.specificationsValue.slice()[i]}
                        margin="normal"
                        // key={2*i+1}
                        style={{marginLeft:'5px',width:'35%'}}
                        onChange={(event:any)=>this.handleChangeSpecificationsValue(event,i)}
                        />
                        <div style={{display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        paddingTop:'20px',
                        marginLeft:'5px'
                        }}>
                        <Button 
                        color="secondary" 
                        variant="contained" 
                        key={i}  
                        style={{width:'20%'}}
                        onClick={()=>this.deleteSpecifications(i)}>
                        删除
                       </Button>
                        </div>
                        
                </div>
            )
        }
        specifications=specificationsArray


        let agencyLevelPrices
        let agencyLevelPricesArray=[]
        for(let i = 0;i<store.agencyLevelPricesCount;i++){
            agencyLevelPricesArray.push(
                <div key={i} style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',paddingLeft:'10px'}}>
                    <TextField
                        id="standard-name"
                        label={i+1+"级奖励"}
                        name="name"
                        value={store.agencyLevelPrices.slice()[i]}
                        margin="normal"
                        // key={2*i}
                        style={{width:'35%'}}
                        onChange={(event:any)=>this.handleChangeAgencyLevelPrices(event,i)}
                        />

                       
                        <div style={{display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        paddingTop:'20px',
                        marginLeft:'5px'
                        }}>
                        <Button 
                        color="secondary" 
                        variant="contained" 
                        key={i}  
                        style={{width:'20%'}}
                        onClick={()=>this.deleteAgencyLevelPrices(i)}>
                        删除
                       </Button>
                        </div>
                        
                </div>
            )
        }
        agencyLevelPrices=agencyLevelPricesArray





        
        return (
            <div>
                {/* <CircularProgress  /> */}
                <ProductsAdminForm 
                    handleInputChange={this.handleInputChange} 
                    handleInputChecked={this.handleInputChecked}     
                    handleSelect={this.handleSelect} 
                    productClassName={store.productClassName} 
                    productClasses={store.productClasses}
                    isTool={store.isTool}
                    isAppointment={store.isAppointment}
                    isRecommend={store.isRecommend}
                    validMsgName={store.validMsg.name}
                    namePassed= {store.namePassed}
                    validMsgNameZh={store.validMsg.name_zh}
                    nameZhPassed= {store.name_zhPassed}
                    validMsgBrief={store.validMsg.brief}
                    briefPassed= {store.briefPassed}
                    validMsgStorage={store.validMsg.storage}
                    storagePassed= {store.storagePassed}
                    store={store}
                />
                <div style={{width:'100%',height:'100px'}}>
            </div>

                <List component="nav" >
                        <ListItem button>
                        <ListItemText primary="商品上传" />
                        </ListItem>
                        <Divider />
                </List>
                <Upload  store={store} uploadtype={'cover'} btntitle={'商品封面上传'} ref="cover"/>
                <Upload  store={store} uploadtype={'images'} btntitle={'商品多图上传'} ref="images"/>
                <Upload  store={store} uploadtype={'detailsImage'} btntitle={'商品详情图上传'} ref="detailsImage"/>
                <div style={{width:'100%',height:'100px'}}>
            </div>
                <List component="nav" >
           
           
                <List component="nav" >
                <ListItem button>
                  <ListItemText primary="商品操作" />
                </ListItem>
                <Divider />
          </List>
            <div style={{border:'1px dashed #aaa',padding:'10px',borderRadius:'5px'}}>
            <Button variant="contained" onClick={this.addParameter} color="secondary" style={{width:'20%'}}>
            添加参数
            </Button>
            {parameter}
            </div>
         

            <div style={{width:'100%',height:'100px'}}>
            </div>
            <div style={{border:'1px dashed #aaa',padding:'10px',borderRadius:'5px'}}>
            <Button variant="contained" onClick={this.addSpecifications} color="secondary" style={{width:'20%'}}>
            添加规格
            </Button>
            {specifications}
            </div>

            <div style={{width:'100%',height:'100px'}}>
            </div>


            <div style={{border:'1px dashed #aaa',padding:'10px',borderRadius:'5px'}}>
            <Button variant="contained" onClick={this.addAgencyLevelPrices} color="secondary" style={{width:'20%'}}>
            添加分销等级奖励
            </Button>
            {agencyLevelPrices}
            </div>

            <div style={{width:'100%',height:'100px'}}>
            </div>
            <ListItem >
              <ListItemText primary="商品确认" />
            </ListItem>
            <Divider />
            </List>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginTop:'50px'}}>
                <Button variant="contained" color="secondary" component={RegisterLink}  onClick={this.cancel}  style={{marginRight:'20px'}}>
                取消
            </Button>



            <Button variant="contained" disabled={!store.allPassed}   onClick={this.creatproduct} color="primary" >
                确认
            </Button>
                </div>
            <div style={{width:'100%',height:'200px'}}>
            </div>
            </div>
        )
    }
}

export default ProductsAdminWithMobx;