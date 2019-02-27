import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ApplicationAdminList from '../stateless/ApplicationAdminList';
import { styles } from '../../css/common'
interface IApplicationAdminWithMobx {
    classes: any,
}

class ApplicationAdminWithMobx extends React.Component<IApplicationAdminWithMobx>{
    state = {
        page: 0,
        rowsPerPage: 5,
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
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <ApplicationAdminList handleChangeRowsPerPage={(e: any) => this.handleChangeRowsPerPage(e)}
                    handleChangePage={this.handleChangePage}
                    page={this.state.page}
                    rowsPerPage={this.state.rowsPerPage}
                />
            </div>
        )
    }
}

export default withStyles(styles)(ApplicationAdminWithMobx) as any;