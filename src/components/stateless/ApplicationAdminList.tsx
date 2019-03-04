import React from 'react';
import Table from '@material-ui/core/Table';
import { withStyles, createStyles, } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import CircularUnderLoad from '../stateless/CircularUnderLoad';
const styles = createStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
        margin: '10px',
        backgroundColor: '#fff',
    },
    table: {
        minWidth: 700,
    },
    button: {
        margin: '2px'
    }
});




interface IApplicationAdminList {
    classes: any;
    handleChangePage: (event: any, page: number) => void;
    handleChangeRowsPerPage: (event: any) => void;
    page: number;
    rowsPerPage: number;
    title: string;
    loading: boolean;
    list: Array<any>;
}
interface IApplicationShow {
    id: string;
    name: string;
    appId: string;
    secrect: string;
    host: string;
}
const ApplicationAdminList = (props: IApplicationAdminList) => {
    const { classes, title, list, loading } = props;
    return (
        <div>
            {
                loading ? <CircularUnderLoad /> :
                    <div>
                        <Typography variant="h5" component="h3">
                            {title}
                        </Typography>
                        <Paper className={classes.root}>

                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>应用名称</TableCell>
                                        <TableCell align="right">应用AppId</TableCell>
                                        <TableCell align="right">应用Secrect</TableCell>
                                        <TableCell align="right">应用Host</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {list.map((row: IApplicationShow) => (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.appId}</TableCell>
                                            <TableCell align="right">{row.secrect}</TableCell>
                                            <TableCell align="right">{row.host}</TableCell>
                                            {/* <TableCell align="right">
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        {row.action}
                                    </Button>
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        {row.action}
                                    </Button>
                                </TableCell> */}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={list.length}
                                rowsPerPage={props.rowsPerPage}
                                page={props.page}
                                backIconButtonProps={{
                                    'aria-label': 'Previous Page',
                                }}
                                nextIconButtonProps={{
                                    'aria-label': 'Next Page',
                                }}
                                onChangePage={props.handleChangePage}
                                onChangeRowsPerPage={(e: any) => props.handleChangeRowsPerPage(e)}
                            />
                        </Paper>
                    </div>
            }
        </div>
    );
}



export default withStyles(styles)(ApplicationAdminList);