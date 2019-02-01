import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';

const styles =  createStyles(({ spacing }:any) => ({
  root: {
    display: 'inline',
    color: 'white',

  },
  paper: {
    color: 'white',
    marginRight: spacing.unit * 2,
  },
}));


interface IUserProfileDropDownProps{
    classes: any,
    history: any,
    currentUser: any,
    msg: any,

}

interface IUserProfileDropDownState{
    open: boolean,

}

@inject('msg')
@inject('currentUser')
@observer
class UserProfileDropDown extends React.Component<IUserProfileDropDownProps, IUserProfileDropDownState> {

    private anchorEl:any;
  state = {
    open: false,
  };

  handleToggle = () => {

    this.setState(state => ({ open: !this.state.open }));
  };

  handleClose = (event:any, action:string) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    switch (action) {

      case "personal":
        this.setState({ open: false });
        this.props.history.push('/personal');
        break;

      case "logout":
        this.props.msg.show('正在登出');
        this.setState({ open: false });
        this.props.currentUser.logOut();
        this.props.msg.show('您已经登出');
        this.props.history.push('/login');
        break;
    
      default:
        this.setState({ open: false });
        break;
    }

    
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
            style={{
              color: "white"
            }}
          >
           HALO,&nbsp;{this.props.currentUser.username}
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }:any) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                timeout='auto'
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={(e:any)=>this.handleClose(e, 'personal')}>
                    <MenuList>
                      <MenuItem onClick={(e:any)=>this.handleClose(e, 'personal')}>个人中心</MenuItem>
                      <MenuItem onClick={(e:any)=>this.handleClose(e, 'logout')}>登出</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
      </div>
    );
  }
}



export default withRouter(withStyles(styles)(UserProfileDropDown) as any);