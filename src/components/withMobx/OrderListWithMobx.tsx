import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../css/common';
import OrderListSearch from '../stateless/OrderListSearch';
import OrderList from '../stateless/OrderList';
import { observer,inject } from 'mobx-react';
import dataContainer from '../../mobx/DataContainer';
import classes from '*.module.scss';

interface IOrdersListWithMobx {
    classes: any,
    dataContainer: any,
    msg: any;
}

@inject('msg')
@inject('dataContainer')
@observer
class OrderListWithMobx extends React.Component<IOrdersListWithMobx> {
    state = {
        rowsPerPage: 10,
        page: 0,
        selected: [],
        numSelected: 0,
        rowCount: 0,
        isSelected: false,
        data: [],
        labels: [
            { name: ''}
        ]
    }

    componentDidMount() {
        const { dataContainer, msg } = this.props;
        const { sourceName, setSourceName, setTitle } = dataContainer;
        setSourceName("apps");
        this.getList();
        setTitle('订单列表')
    }

    getList = () =>{
        const { dataContainer, msg } = this.props;
        const { getList } = dataContainer;
        getList({sort: ['id', 'DESC'], page: 1, pagesize: 25}, (m:any)=>{
            console.log(m)
            msg.show(m);
        })
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

    render() {
        const { title, list, loading, isSelected, selected, handleSelectAllClick, handleClick} = dataContainer;
        console.log(isSelected)
        console.log(list)
        return (
            <div className={classes.root}>
                <OrderListSearch 
                    handleDateChange={this.handleDateChange} 
                    handleTimeChange={this.handleTimeChange}
                />
                <OrderList
                    handleChangePage={this.handleChangePage}
                    handleChangeRowsPerPage={(e:any)=>this.handleChangeRowsPerPage(e)}
                    page={this.state.page}
                    rowsPerPage={this.state.rowsPerPage}
                    numSelected={this.state.numSelected}
                    rowCount={this.state.rowCount}
                    handleClick={handleClick}
                    handleSelectAllClick={handleSelectAllClick}
                    isSelected={isSelected}
                    selected={selected}
                    list={list}
                    title={title}
                    loading={loading}
                    labels={this.state.labels}
                />
            </div>
        )
    }
}

export default withStyles(styles)(OrderListWithMobx) as any;