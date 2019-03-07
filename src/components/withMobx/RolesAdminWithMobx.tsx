import React from 'react';
import { observer, inject } from 'mobx-react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { element } from 'prop-types';
import AdminPanel from '../stateless/AdminPanel';
import RoleAdminList from '../stateless/RoleAdminList';


interface IRolesAdminWithMobxProps {
    classes: any,
    dataContainer: any;
    msg: any,
}

@inject('msg')
@inject('dataContainer')
@observer
class RolesAdminWithMobx extends React.Component<IRolesAdminWithMobxProps>{
    state = {
        page: 0,
        rowsPerPage: 5,
        selected: [],
        labels: [
            { name: '应用名称' },
            { name: '应用appId' },
            { name: '应用Secrect' },
            { name: '应用Host' }
        ]
    }
    componentDidMount() {
        const { dataContainer, msg } = this.props;
        const { sourceName, setSourceName, setTitle } = dataContainer;
        setSourceName("roles");
        this.getList();
        setTitle('角色列表')
    }
    getList = () => {
        const { dataContainer, msg } = this.props;
        const { getList } = dataContainer;
        getList({ sort: ['id', 'DESC'], page: 1, pagesize: 25 }, (m: any) => {
            console.log(m)
            msg.show(m);
        })
    }
    handleChangePage = (event: any, page: number) => {
        console.log(event)
        console.log(page)
    }

    handleChangeRowsPerPage = (event: any) => {
        console.log(event.target.value)
        this.setState({ rowsPerPage: event.target.value });
    }
    render() {
        const { classes, dataContainer } = this.props;
        const { title, list, loading, isSelected, selected, handleSelectAllClick, handleClick } = dataContainer;
        return (
            <div>
                <RoleAdminList
                    handleChangeRowsPerPage={(e: any) => this.handleChangeRowsPerPage(e)}
                    handleChangePage={this.handleChangePage}
                    page={this.state.page}
                    rowsPerPage={this.state.rowsPerPage}
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

export default RolesAdminWithMobx as any;