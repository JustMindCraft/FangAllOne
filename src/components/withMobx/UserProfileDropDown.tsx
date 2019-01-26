import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles =  createStyles(({ spacing }:any) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: spacing.unit * 2,
  },
}));


interface IUserProfileDropDownProps{
    classes: any,

}

interface IUserProfileDropDownState{
    open: boolean,

}

class UserProfileDropDown extends React.Component<IUserProfileDropDownProps, IUserProfileDropDownState> {

    private anchorEl:any;
  state = {
    open: false,
  };

  handleToggle = () => {

    this.setState(state => ({ open: !this.state.open }));
  };

  handleClose = (event:any) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
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
          >
            Toggle Menu Grow
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
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                      <MenuItem onClick={this.handleClose}>Logout</MenuItem>
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



export default withStyles(styles)(UserProfileDropDown);