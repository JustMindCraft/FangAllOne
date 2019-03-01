import React from 'react';
import UserAdminList from '../stateless/UserAdminList';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';

import { styles } from '../../css/common'
interface IUserAdminWithMobx{
    classes: any,
    dataContainer: any;
    msg: any;
}

class UserAdminWithMobx extends React.Component<IUserAdminWithMobx>{
    state = {
        page: 0,
        rowsPerPage: 5,
    }
    componentDidMount(){
        const { dataContainer, msg } = this.props;
        const { sourceName, setSourceName, setTitle } = dataContainer;
        setSourceName("users");
        this.getList();
        setTitle('用户列表')
    }
    getList = () =>{
        const { dataContainer, msg } = this.props;
        const { getList } = dataContainer;
        getList({sort: ['id', 'DESC'], page: 1, pagesize: 25}, (m:any)=>{
            console.log(m)
            msg.show(m);
        })
    }

    handleChangePage = (event: any, page: number) => {
        console.log(event)
        console.log(page)
        // this.setState({ page });
    }

    handleChangeRowsPerPage = (event: any) => {
        console.log(event.target.value)
        this.setState({ rowsPerPage: event.target.value });
    }
    
    render() {
        const { classes, dataContainer  } = this.props;
        const { title, list, loading} = dataContainer;
        return(
            <div className={classes.root}>
               <UserAdminList handleChangeRowsPerPage={(e: any) => this.handleChangeRowsPerPage(e)}
                handleChangePage={this.handleChangePage}
                page={this.state.page}
                rowsPerPage={this.state.rowsPerPage}
                list={list}
                title={title}
                loading={loading}
               />
            </div>
        )
    }
}

export default  withStyles(styles)(UserAdminWithMobx) as any;