import React from 'react'
import { withRouter } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import UserProfileDropDown from '../withMobx/UserProfileDropDown';
import Button from '@material-ui/core/Button';


const TopBar = (props: any) => {

  const isPc = isWidthUp('sm', props.width);
  const titleAlign = isPc ? "left" : "center";

  return (
    <AppBar position="relative">

      <Toolbar>
        {
          props.isLogined &&
          <IconButton color="inherit" aria-label="Open drawer" onClick={props.toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
        }

        <Typography variant="h6" color="inherit" style={{ flexGrow: 1, textAlign: titleAlign }}>
          {props.appName}
        </Typography>
        <div>
          <Button onClick={() => props.history.push('/')} color="inherit">首页</Button>
          {
            props.isLogined ? <Button onClick={() => props.history.push('/dashboard')} color="inherit">面板</Button>
              : <Button onClick={() => props.history.push('/register')} color="inherit">注册</Button>
          }
          {
            props.isLogined ? <UserProfileDropDown />
              : <Button onClick={() => props.history.push('/login')} color="inherit">登录</Button>
          }


        </div>

      </Toolbar>
    </AppBar>
  )
}


export default withWidth()(withRouter(TopBar));