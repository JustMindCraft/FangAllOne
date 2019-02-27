import React from 'react';
import WithdrawalAdminList from '../stateless/WithdrawalAdminList';
import WithdrawalAdminSearch from '../stateless/WithdrawalAdminSearch'
import WithdrawalAdminTab from '../stateless/WithdrawalAdminTab'
import { withStyles } from '@material-ui/core/styles';


import { styles } from '../../css/common'
interface IWithdrawalAdminWithMobx {
    value: number,
    classes: any,
}
class WithdrawalAdminWithMobx extends React.Component<IWithdrawalAdminWithMobx>{
    state = {
        value: 1,
        page: 0,
        rowsPerPage: 5,
    }
    handleDateChange = (date: any) => {

    }
    handleChange = (event: any, value: any) => {
        console.log(event)
        this.setState({ value });
    }
    handleChangePage = (event: any, page: number) => {
        console.log(event)
        console.log(page)
        this.setState({ page });
    }

    handleChangeRowsPerPage = (event: any) => {
        console.log(event.target.value)
        this.setState({ rowsPerPage: event.target.value });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <WithdrawalAdminTab value={this.state.value} handleChange={this.handleChange} />
                <WithdrawalAdminSearch handleDateChange={this.handleDateChange} />
                <WithdrawalAdminList
                    handleChangeRowsPerPage={(e: any) => this.handleChangeRowsPerPage(e)}
                    handleChangePage={this.handleChangePage}
                    page={this.state.page}
                    rowsPerPage={this.state.rowsPerPage}
                />
            </div>
        )
    }
}

export default withStyles(styles)(WithdrawalAdminWithMobx) as any;