import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const MobileTop = (props:any) => {
    
    // const { isLogined, username, fetching } = props.content;
    
    
    
    return (
            <AppBar position="relative" style={{width: '101%'}}>
              
              <Toolbar>
                <IconButton color="inherit" aria-label="Open drawer">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" style={{flexGrow: 1, textAlign: 'center'}}>
                  正觉工场
                </Typography>
                <div>
                <Button onClick={()=>props.history.push('/login')}  color="inherit">立即开店</Button>
                </div>
               
              </Toolbar>
            </AppBar>
    )
}
    

export default MobileTop;