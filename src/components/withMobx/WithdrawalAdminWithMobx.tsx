import React from 'react';
import WithdrawalAdminList from '../stateless/WithdrawalAdminList';
import WithdrawalAdminSearch from '../stateless/WithdrawalAdminSearch'
import WithdrawalAdminTab from '../stateless/WithdrawalAdminTab'

interface IWithdrawalAdminWithMobx{
    value: number
}
class WithdrawalAdminWithMobx extends React.Component<IWithdrawalAdminWithMobx>{
    state = {
     value: 1,
    }
    handleDateChange = (date:any) => {

    }
    handleChange = () => {

    }
    render(){
        return(
            <div>
                <WithdrawalAdminTab value={this.state.value} handleChange={this.handleChange}/>
                <WithdrawalAdminSearch handleDateChange={this.handleDateChange} />
                <WithdrawalAdminList />
            </div>
        )
    }
}

export default WithdrawalAdminWithMobx as any;