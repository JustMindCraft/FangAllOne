import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Upload from '../withMobx/Upload';
// import productsAdmin from '../../mobx/components/ProductsAdmin'

interface ILoginFormProps {
  classes: any;
  handleInputChange: (event: any, key: string) => void;
}
const styles = createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  head:{
    width:'auto'
  },
  button:{
    marginTop:5,
    background:'#18b8ff',
    color:'white'
  }
});



const ProductsAdminForm = (props:ILoginFormProps) =>  {
  const { classes } = props;
    return(
    <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
            <List component="nav" className={classes.root}>
                <ListItem button>
                  <ListItemText primary="商品信息" />
                </ListItem>
                <Divider />
          </List>
      <TextField
            id="outlined-email-input"
            label="商品名称"
            type="username"
            name="name"
            margin="normal"
            variant="outlined"
            onChange={(event:any)=>props.handleInputChange(event, "name")}
            className={classes.head}
          />
          <TextField
            id="outlined-email-input"
            label="商品中文名称"
            type="username"
            name="name_zh"
            onChange={(event:any)=>props.handleInputChange(event, "name_zh")}
            margin="normal"
            variant="outlined"
          />
          
          <TextField
            id="outlined-email-input"
            label="商品销量"
            type="username"
            name="sales_volume"
            onChange={(event:any)=>props.handleInputChange(event, "sales_volume")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="商品简介"
            type="username"
            name="breif"
            onChange={(event:any)=>props.handleInputChange(event, "brief")}
            margin="normal"
            variant="outlined"
          />
            {/* <List component="nav" >
                    <ListItem button>
                    <ListItemText primary="商品上传" />
                    </ListItem>
                    <Divider />
                </List>
                <Upload  store={productsAdmin} uploadtype={'images'} btntitle={'商品多图上传'}/>
                <Upload  store={productsAdmin} uploadtype={'cover'} btntitle={'商品封面上传'}/>
                <Upload  store={productsAdmin} uploadtype={'detailsImage'} btntitle={'商品详情图上传'}/>
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
            </div> */}
          


          
            <List component="nav" className={classes.root}>
                <ListItem button>
                  <ListItemText primary="商品操作" />
                </ListItem>
                <Divider />
          </List>

          <FormGroup >
        <FormControlLabel
          label="商品是否为工具类型"

          control={
            <Switch
              // checked={this.state.checkedA}
              // onChange={this.handleChange('checkedA')}
              value="checkedA"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="商品是否可以预约"

          control={
            <Switch
              // checked={this.state.checkedB}
              // onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="商品是否上首页"

          control={
            <Switch
              // checked={this.state.checkedB}
              // onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
        />

          </FormGroup>

      
    </div>
    )
  }


ProductsAdminForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ProductsAdminForm);