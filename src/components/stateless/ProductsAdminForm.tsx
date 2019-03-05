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


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { values } from 'mobx';
// import Upload from '../withMobx/Upload';
// import productsAdmin from '../../mobx/components/ProductsAdmin'

interface ILoginFormProps {
  classes: any;
  handleInputChange: (event: any, key: string) => void;
  handleSelect:(event: any) => void;
  handleInputChecked: (event: any, key: string) => void;
  productClasses:any;
  productClassName:any;
  isTool:boolean;
  isAppointment:boolean;
  isRecommend:boolean;
  validMsgName:any;
  namePassed:boolean;
  validMsgNameZh:any;
  nameZhPassed:boolean;
  validMsgBrief:any;
  briefPassed:boolean;
}

interface InputLabelProps {
  ref:any
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
  const { classes,productClasses,productClassName,isTool,isRecommend,isAppointment } = props;
  let productClass = new Array
  for(let i = 0;i<productClasses.length;i++){
    productClass.push(<MenuItem key={i} value={productClasses[i]}>{productClasses[i]}</MenuItem>)
  }
    return(
    <div style={{display:'flex',flexDirection:'column',width:'100%'}}>



            <List component="nav" className={classes.root}>
                <ListItem button>
                  <ListItemText primary="商品信息" />
                </ListItem>
                <Divider />
          </List>
          <FormControl className={classes.formControl} style={{width:'200px'}}>
          <InputLabel htmlFor="age-simple">商品类别</InputLabel>
          <Select
            value={productClassName}
            onChange={(event:any)=>props.handleSelect(event)}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
            {productClass}
          </Select>
        </FormControl>
      <TextField
            id="outlined-email-input"
            label="商品名称"
            type="username"
            name="name"
            margin="normal"
            variant="outlined"
            error={!props.namePassed}
            helperText={props.validMsgName}
            onChange={(event:any)=>props.handleInputChange(event, "name")}
            className={classes.head}
          />
          <TextField
            id="outlined-email-input"
            label="商品中文名称"
            type="username"
            name="name_zh"
            error={!props.nameZhPassed}
            helperText={props.validMsgNameZh}
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
            label="商品库存"
            type="username"
            name="storage"
            onChange={(event:any)=>props.handleInputChange(event, "storage")}
            margin="normal"
            variant="outlined"
          />


          <TextField
            id="outlined-email-input"
            label="商品简介"
            type="username"
            error={!props.briefPassed}
            helperText={props.validMsgBrief}
            name="breif"
            onChange={(event:any)=>props.handleInputChange(event, "brief")}
            margin="normal"
            variant="outlined"
          />
          
          

          
            <List component="nav" className={classes.root}>
                <ListItem button>
                  <ListItemText primary="商品类型" />
                </ListItem>
                <Divider />
          </List>

          <FormGroup >
        <FormControlLabel
          label="商品是否为工具类型"

          control={
            <Switch
              checked={isTool}
              onChange={(event:any)=>props.handleInputChecked(event,'isTool')}
              value="isTool"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="商品是否可以预约"

          control={
            <Switch
              checked={isAppointment}
              onChange={(event:any)=>props.handleInputChecked(event,'isAppointment')}
              value="isAppointment"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="商品是否上首页"

          control={
            <Switch
              checked={isRecommend}
              onChange={(event:any)=>props.handleInputChecked(event,'isRecommend')}
              value="isRecommend"
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