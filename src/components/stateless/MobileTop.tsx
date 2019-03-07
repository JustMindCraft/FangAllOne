import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router';

const MobileTop = (props: any) => {

  const { match, history } = props;
  
  const isBack = () =>{
    switch (match.path) {
      case "/products/:id":
        return true;
      default: 
        return false;
    }
  }
  return (
    <AppBar position="relative" style={{ width: '101%' }}>

      <Toolbar>
        {props.isLogined && (isBack() ? <span onClick={()=>{history.goBack()}}>《</span>　:
          <IconButton color="inherit" aria-label="Open drawer" onClick={props.toggleDrawer('left', true)}>
          <MenuIcon />
        </IconButton>
        )}
        <Typography variant="h6" color="inherit" style={{ flexGrow: 1, textAlign: 'center' }}>
          {props.appName}
        </Typography>
        <div>
        </div>
      </Toolbar>

    </AppBar>
  )
}


export default withRouter(MobileTop);