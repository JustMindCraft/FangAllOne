import React from 'react';
import WithdrawalAdminList from '../stateless/WithdrawalAdminList';
import WithdrawalAdminSearch from '../stateless/WithdrawalAdminSearch'
import WithdrawalAdminTab from '../stateless/WithdrawalAdminTab'
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


import { styles } from '../../css/common'
interface IWithdrawalAdminWithMobx {
    value: number,
    classes: any,
    dataContainer: any;
    msg: any;
}

const TabContainer = (props: any) => {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    )
}

@inject('msg')
@inject('dataContainer')
class WithdrawalAdminWithMobx extends React.Component<IWithdrawalAdminWithMobx>{
    state = {
        value: 1,
        page: 0,
        rowsPerPage: 5,
    }
    componentDidMount() {
        const { dataContainer, msg } = this.props;
        const { sourceName, setSourceName, setTitle } = dataContainer;
        setSourceName("withdrawals");
        this.getList();
        setTitle('提现列表')
    }

    getList = () => {
        const { dataContainer, msg } = this.props;
        const { getList } = dataContainer;
        getList({ sort: ['id', 'DESC'], page: 1, pagesize: 25 }, (m: any) => {
            console.log(m)
            msg.show(m);
        })
    }

    handleDateChange = (date: any) => {

    }
    handleChange = (event: any, value: any) => {
        console.log(value)
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
        const { classes, dataContainer } = this.props;
        const { title, list, loading, page, pagesize } = dataContainer;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange} centered>
                        <Tab label="未打款" />
                        <Tab label="已打款" />
                        <Tab label="已撤销" />
                    </Tabs>
                </AppBar>
                {this.state.value === 0
                    &&
                    <TabContainer>
                        未打款
                    <WithdrawalAdminList
                            handleChangeRowsPerPage={(e: any) => this.handleChangeRowsPerPage(e)}
                            handleChangePage={this.handleChangePage}
                            page={page}
                            rowsPerPage={pagesize}
                            list={list}
                            title={title}
                            loading={loading}
                        />
                    </TabContainer>
                }
                {this.state.value === 1
                    &&
                    <TabContainer>
                        已打款
                        <WithdrawalAdminList
                            handleChangeRowsPerPage={(e: any) => this.handleChangeRowsPerPage(e)}
                            handleChangePage={this.handleChangePage}
                            page={page}
                            rowsPerPage={pagesize}
                            list={list}
                            title={title}
                            loading={loading}
                        />
                    </TabContainer>
                }
                {this.state.value === 2
                    &&
                    <TabContainer>
                        已撤销
                        <WithdrawalAdminList
                            handleChangeRowsPerPage={(e: any) => this.handleChangeRowsPerPage(e)}
                            handleChangePage={this.handleChangePage}
                            page={page}
                            rowsPerPage={pagesize}
                            list={list}
                            title={title}
                            loading={loading}
                        />
                    </TabContainer>
                }

                {/* <WithdrawalAdminTab value={this.state.value} handleChange={this.handleChange} />
                <WithdrawalAdminSearch handleDateChange={this.handleDateChange} /> */}

            </div>
        )
    }
}

export default withStyles(styles)(WithdrawalAdminWithMobx) as any;