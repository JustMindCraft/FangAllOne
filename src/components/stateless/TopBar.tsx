import React from 'react'
import { withRouter } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import UserProfileDropDown from '../withMobx/UserProfileDropDown';





const TopBar = (props:any) => {
    
    const isPc = isWidthUp('sm', props.width);
    const titleAlign = isPc ? "left" : "center";
    
    return (
            <AppBar position="relative">
              
              <Toolbar>
                {!isPc && 
                <IconButton color="inherit" aria-label="Open drawer">
                  <MenuIcon />
                </IconButton>
              }
                <Typography variant="h6" color="inherit" style={{flexGrow: 1, textAlign: titleAlign}}>
                  正觉工场
                </Typography>
                <div>
                <Button onClick={()=>props.history.push('/')}  color="inherit">首页</Button>
                <Button onClick={()=>props.history.push('/about')}  color="inherit">立即开店</Button>
                {
                  props.isLogined ? <Button onClick={()=>props.history.push('/dashboard')}  color="inherit">面板</Button>
                  : <Button onClick={()=>props.history.push('/register')}  color="inherit">注册</Button>
                }
                {
                  props.isLogined ? <UserProfileDropDown />
                  :  <Button onClick={()=>props.history.push('/login')}  color="inherit">登录</Button>
                }
                
               
                </div>
               
              </Toolbar>
            </AppBar>
    )
}
    

export default withWidth()(withRouter(TopBar));