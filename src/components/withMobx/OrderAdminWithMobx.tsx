import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../css/common';
import OrderAdminSearch from '../stateless/OrderAdminSearch';
import OrderAdminList from '../stateless/OrderAdminList';
import { observer,inject } from 'mobx-react';
import dataContainer from '../../mobx/DataContainer';

interface IOrderAdminWithMobx {
    classes: any,
    dataContainer: any,
    msg: any;
}


@inject('msg')
@inject('dataContainer')
@observer
class OrderAdminWithMobx extends React.Component<IOrderAdminWithMobx> {
    state = {
        rowsPerPage: 10,
        page: 0,
        selected: [],
        labels: [
            { name: '订单号' },
            { name: '下单时间' },
            { name: '金额' },
            { name: '支付方式' },
            { name: '支付时间' },
            { name: '状态' },
            { name: '操作' },
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
        const { classes, dataContainer } = this.props;
        const { title, list, loading, isSelected, selected, handleSelectAllClick, handleClick} = dataContainer;
        console.log(isSelected)
        console.log(list)
        return (
            <div className={classes.root}>
                <OrderAdminSearch 
                    handleDateChange={this.handleDateChange} 
                    handleTimeChange={this.handleTimeChange}
                />
                <OrderAdminList
                    handleChangePage={this.handleChangePage}
                    handleChangeRowsPerPage={(e:any)=>this.handleChangeRowsPerPage(e)}
                    page={this.state.page}
                    rowsPerPage={this.state.rowsPerPage}
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

export default withStyles(styles)(OrderAdminWithMobx) as any;