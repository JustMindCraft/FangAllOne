import React from 'react';
import WithdrawalAdminList from '../stateless/WithdrawalAdminList';
import WithdrawalAdminSearch from '../stateless/WithdrawalAdminSearch'
import WithdrawalAdminTab from '../stateless/WithdrawalAdminTab'
import { withStyles, createStyles } from '@material-ui/core/styles';


import { styles } from '../../css/common'
interface IWithdrawalAdminWithMobx{
    value: number,
    classes: any,
}
class WithdrawalAdminWithMobx extends React.Component<IWithdrawalAdminWithMobx>{
    state = {
     value: 1,
    }
    handleDateChange = (date:any) => {

    }
    handleChange = (event:any ,value: any) => {
        console.log(event)
        this.setState({ value });
    }
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <WithdrawalAdminTab value={this.state.value} handleChange={this.handleChange}/>
                <WithdrawalAdminSearch handleDateChange={this.handleDateChange} />
                <WithdrawalAdminList />
            </div>
        )
    }
}

export default withStyles(styles)(WithdrawalAdminWithMobx) as any;