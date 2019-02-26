import React from 'react';
import UserAdminList from '../stateless/UserAdminList';
import WithdrawalAdminTab from '../stateless/WithdrawalAdminTab'
import { withStyles } from '@material-ui/core/styles';


import { styles } from '../../css/common'
interface IUserAdminWithMobx{
    classes: any,
}

class UserAdminWithMobx extends React.Component<IUserAdminWithMobx>{
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
               <UserAdminList />
            </div>
        )
    }
}

export default  withStyles(styles)(UserAdminWithMobx) as any;