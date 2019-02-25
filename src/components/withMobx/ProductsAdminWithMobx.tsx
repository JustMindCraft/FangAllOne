import React from 'react';
import ProductsAdminForm from '../stateless/ProductsAdminForm';
import Upload from './Upload';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
interface ProductsAdminWithMobxProps {
    store: any,
}

class ProductsAdminWithMobx extends React.Component<ProductsAdminWithMobxProps>{
    componentDidMount(){
        const { store } = this.props;
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
    render (){
        const { store } = this.props;
        console.log(store);
        
        return (
            <div>
                
                <ProductsAdminForm handleInputChange={this.handleInputChange}/>
                <List component="nav" >
                        <ListItem button>
                        <ListItemText primary="商品上传" />
                        </ListItem>
                        <Divider />
                </List>
                <Upload  store={store} uploadtype={'cover'} btntitle={'商品封面上传'}/>
                <Upload  store={store} uploadtype={'images'} btntitle={'商品多图上传'}/>
                <Upload  store={store} uploadtype={'detailsImage'} btntitle={'商品详情图上传'}/>

                <List component="nav" >
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