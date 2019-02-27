import React from 'react';
import OrderListSearch from '../stateless/OrderListSearch';
import OrderList from '../stateless/OrderList';

interface IOrdersListWithMobx {
    classes: any,
}

class OrderListWithMobx extends React.Component<IOrdersListWithMobx> {
    state = {
        rowsPerPage: 5,
        page: 0,
        selected: [],
        numSelected: 0,
        rowCount: 0,

        
    }

    handleDateChange = (date: any) => {
        console.log(date)
    }

    handleTimeChange = (time: any) => {
        console.log(time)
    }

    handleChangePage = (event: any, page: number) => {
        console.log(event)
        console.log(page)
        this.setState({ page })
    }

    handleChangeRowsPerPage = (event: any) => {
        console.log(event.target.value)
        this.setState({ rowsPerPage:event.target.value})
    }

    handleSelectAllClick = (event: any) => {
        console.log(event)
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <OrderListSearch 
                    handleDateChange={this.handleDateChange} 
                    handleTimeChange={this.handleTimeChange}
                />
                <OrderList
                    handleChangePage={this.handleChangePage}
                    handleChangeRowsPerPage={(e:any)=>this.handleChangeRowsPerPage(e)}
                    page={this.state.page}
                    rowsPerPage={this.state.rowsPerPage}
                    handleSelectAllClick={this.handleSelectAllClick}
                    numSelected={this.state.numSelected}
                    rowCount={this.state.rowCount}
                />
            </div>
        )
    }
}

export default OrderListWithMobx as any;