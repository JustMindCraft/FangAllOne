import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


const styles = {
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 100,
      height: 100,
      borderRadius:5,
      background:'rgb(236, 236, 236)'
    },
    root: {
        width: '100%',
        maxWidth: 360,
      },
     
  };
  

const MyShopAdminList = (props:any) => {
    const { classes } = props;
    return (
        <div style={{width:'90%'}}>
            <h2>我的店铺</h2>
            <div style={{margin:'5px',border:'1px solid #aaa',display:'flex',flexDirection:'column'}}>
                <div style={{width:'100%',border:'1px solid blue',display:'flex',flexDirection:'row'}}>
                    <div style={{padding:'10px'}}>
                        <Grid container  alignItems="center">
                        <Avatar alt="Remy Sharp" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className={classes.bigAvatar} />
                        </Grid>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',padding:'20px'}}>
                        <div style={{padding:'3px'}}><span style={{fontSize:'20px'}}>万人车汇自营店</span></div>
                        <div style={{padding:'3px'}}><span style={{fontSize:'14px'}}>店铺描述:</span><span style={{fontSize:'12px'}}>&nbsp;&nbsp;这是万人车汇平台官方店</span></div>
                        <div style={{padding:'3px'}}><span style={{fontSize:'14px'}}>联系电话:</span><span style={{fontSize:'12px'}}>&nbsp;&nbsp;18628845121</span></div>
                        <div style={{padding:'3px'}}><span style={{fontSize:'14px'}}>店主:</span><span style={{fontSize:'12px'}}>&nbsp;&nbsp;zhoushixiong</span></div>

                        
                      
                    </div>
                </div>
                <div style={{width:'100%',height:'400px',border:'1px solid yellow'}}>


                </div>
            </div>
        </div>
    )
}

MyShopAdminList.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(MyShopAdminList);