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
interface ProductsAdminWithMobxProps {
    store: any,
}
@observer
class ProductsAdminWithMobx extends React.Component<ProductsAdminWithMobxProps>{
    componentDidMount(){
        const { store } = this.props;
    }
    componentWillReceiveProps(){
        const { store } = this.props;
        console.log(store.parameterCount);
    }
    handleInputChange = (event:any, key:string) => {
        const {store} = this.props;
        console.log(store);
        
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
            default:
                break;
        }
        
    }
    handleChangeParameterName=(event:any,i:any)=>{
        const {store} = this.props
        const value = event.target.value;
        const arr = []
        arr.push(value)
        console.log(value,i)
        console.log(store.parameterCount);
        console.log(arr);
        
        
        
    }
    handleChangeParameterValue=(event:any,i:any)=>{
        const value = event.target.value;
        console.log(value)
    }

    addParameter=(event:any)=>{
        const {store} =this.props;

        console.log('点击触发');
        store.creatParameter();
        console.log(store.parameterCount);
        
        
    }
    render (){
        const { store } = this.props;
        console.log(store);
        let parameter
        let parameterArray=[]
        for(let i = 0;i<store.parameterCount;i++){
            parameterArray.push(
                <div key={i} style={{textAlign:'center'}}>
                    <TextField
                        id="standard-name"
                        label="参数名"
                        name="name"
                        margin="normal"
                        // key={2*i}
                        style={{width:'40%'}}
                        onChange={(event:any)=>this.handleChangeParameterName(event,i)}
                        />

                        <TextField
                        id="standard-uncontrolled"
                        label="参数值"
                        name="value"
                        margin="normal"
                        // key={2*i+1}
                        style={{marginLeft:'5px',width:'40%'}}
                        onChange={(event:any)=>this.handleChangeParameterValue(event,i)}
                        />
                </div>
            )
        }
        parameter=parameterArray
        
        return (
            <div>
                
                <ProductsAdminForm handleInputChange={this.handleInputChange} />
                <List component="nav" >
                        <ListItem button>
                        <ListItemText primary="商品上传" />
                        </ListItem>
                        <Divider />
                </List>
                <Upload  store={store} uploadtype={'cover'} btntitle={'商品封面上传'} ref="cover"/>
                <Upload  store={store} uploadtype={'images'} btntitle={'商品多图上传'} ref="images"/>
                <Upload  store={store} uploadtype={'detailsImage'} btntitle={'商品详情图上传'} ref="detailsImage"/>

                <List component="nav" >
           
           
                <List component="nav" >
                <ListItem button>
                  <ListItemText primary="商品操作" />
                </ListItem>
                <Divider />
          </List>

          <Button variant="contained" onClick={this.addParameter} color="secondary" style={{width:'20%'}}>
            添加参数
            </Button>
            {parameterArray}
            <ListItem button>
              <ListItemText primary="商品确认" />
            </ListItem>
            <Divider />
            </List>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginTop:'50px'}}>
                <Button variant="contained" color="secondary" style={{marginRight:'20px'}}>
                取消
            </Button>
            <Button variant="contained" color="primary" >
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