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
interface ILoginFormProps {
  classes: any;
  
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
            name="username"
            margin="normal"
            variant="outlined"
            className={classes.head}
          />
          <TextField
            id="outlined-email-input"
            label="商品中文名称"
            type="username"
            name="english"
            margin="normal"
            variant="outlined"
          />
          
          <TextField
            id="outlined-email-input"
            label="商品销量"
            type="username"
            name="count"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="商品简介"
            type="username"
            name="breif"
            margin="normal"
            variant="outlined"
          />

          


          <List component="nav" className={classes.root}>
                <ListItem button>
                  <ListItemText primary="图片上传" />
                </ListItem>
                <Divider />
          </List>
          <div style={{width:'100%',height:'300px',border:'1px dashed #aaa',overflowY: 'scroll',textAlign:'center',marginTop:'10px'}}>
                    {/* {children} */}
                </div>
          <input
              accept="image/*"
              id="text-button-file"
              multiple
              type="file"
              // onChange={this.handleFiles}
              style={{display:'none'}}
            />
            <Button variant="contained" color="default" className={classes.button}>
              商品封面上传
              <CloudUploadIcon className={classes.rightIcon} />
            </Button>

            <div style={{width:'100%',height:'300px',border:'1px dashed #aaa',overflowY: 'scroll',textAlign:'center',marginTop:'20px'}}>
                    {/* {children} */}
                </div>
            <input
              accept="image/*"
              id="text-button-file"
              multiple
              type="file"
              // onChange={this.handleFiles}
              style={{display:'none'}}
            />
            <Button variant="contained" color="default" className={classes.button}>
              商品轮播图上传
              <CloudUploadIcon className={classes.rightIcon} />
            </Button>

            <div style={{width:'100%',height:'300px',border:'1px dashed #aaa',overflowY: 'scroll',textAlign:'center',marginTop:'20px'}}>
                    {/* {children} */}
                </div>
            <input
              accept="image/*"
              id="text-button-file"
              multiple
              type="file"
              // onChange={this.handleFiles}
              style={{display:'none'}}
            />
            <Button variant="contained" color="default" className={classes.button}>
              商品详情图上传
              <CloudUploadIcon className={classes.rightIcon} />
            </Button>
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

      <List component="nav" className={classes.root}>
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


ProductsAdminForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ProductsAdminForm);