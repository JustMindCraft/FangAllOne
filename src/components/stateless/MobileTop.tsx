import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router';

const MobileTop = (props:any) => {
    
    // const { isLogined, username, fetching } = props.content;
    
    
    
    return (
            <AppBar position="relative" style={{width: '101%'}}>
              
              <Toolbar>
               { props.isLogined &&  <IconButton color="inherit" aria-label="Open drawer" onClick={props.toggleDrawer('left', true)}>
                  <MenuIcon />
                </IconButton>}
                <Typography variant="h6" color="inherit" style={{flexGrow: 1, textAlign: 'center'}}>
                  {props.appName}
                </Typography>
                <div>
                </div>
               
              </Toolbar>
            </AppBar>
    )
}
    

export default withRouter(MobileTop);