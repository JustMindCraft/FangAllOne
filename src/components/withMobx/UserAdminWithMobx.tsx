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
@inject('msg')
@inject('dataContainer')
@observer
class UserAdminWithMobx extends React.Component<IUserAdminWithMobx>{
    state = {
        labels: [
            { name: '用户名'},
            { name: '手机'},
            { name: '邮箱'}
        ]
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
        // this.setState({ rowsPerPage: event.target.value });
    }
    
    render() {
        const { classes, dataContainer  } = this.props;
        const { title, list, loading, page, pagesize, selected, isSelected, handleSelectAllClick, handleClick } = dataContainer;
        return(
            <div className={classes.root}>
               <UserAdminList handleChangeRowsPerPage={(e: any) => this.handleChangeRowsPerPage(e)}
                handleChangePage={this.handleChangePage}
                page={page}
                rowsPerPage={pagesize}
                list={list}
                title={title}
                loading={loading}
                selected={selected}
                labels={this.state.labels}
                isSelected={isSelected}
                handleSelectAllClick={handleSelectAllClick}
                handleClick={handleClick}
               />
            </div>
        )
    }
}

export default  withStyles(styles)(UserAdminWithMobx) as any;