import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ApplicationAdminList from '../stateless/ApplicationAdminList';
import { styles } from '../../css/common'
import { observer, inject } from 'mobx-react';
interface IApplicationAdminWithMobx {
    classes: any,
    dataContainer: any;
    msg: any;
}

@inject('msg')
@inject('dataContainer')
@observer
class ApplicationAdminWithMobx extends React.Component<IApplicationAdminWithMobx>{
    state = {
        page: 0,
        rowsPerPage: 5,
    }
    componentDidMount(){
        const { dataContainer, msg } = this.props;
        const { sourceName, setSourceName, setTitle } = dataContainer;
        setSourceName("apps");
        this.getList();
        setTitle('应用列表')
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
        return (
            <div className={classes.root}>
                <ApplicationAdminList handleChangeRowsPerPage={(e: any) => this.handleChangeRowsPerPage(e)}
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

export default withStyles(styles)(ApplicationAdminWithMobx) as any;