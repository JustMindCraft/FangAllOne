import React from 'react';
import WithdrawalAdminList from '../stateless/WithdrawalAdminList';
import WithdrawalAdminSearch from '../stateless/WithdrawalAdminSearch'
class WithdrawalAdminWithMobx extends React.Component{
    handleDateChange = (date:any) => {

    }
    render(){
        return(
            <div>
            WithdrawalAdminWithMobx
            13
            <WithdrawalAdminSearch handleDateChange={this.handleDateChange} />
            <WithdrawalAdminList />
            </div>
        )
    }
}

export default  WithdrawalAdminWithMobx;