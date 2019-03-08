import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';
import CircularUnderLoad from './CircularUnderLoad';
import EnhancedTableHead from './EnhancedTableHead';

const styles = createStyles({
    root: {
        width: '100%',
        overflow: 'auto',
        margin: '10px',
        backgroundColor: '#fff',
    },
    table: {
        minWidth: 700,
    },
    button: {
        margin: '2px'
    }
})

interface IOrderAdminListProps {
    classes: any;
    title: string;
    loading: boolean;
    labels:Array<any>;
    list: Array<any>;
    isSelected: any;
    selected: Array<any>;
    handleSelectAllClick: (event: any) => void;
    handleClick: (event: any, id: any) => void;
    rowsPerPage: number;
    page: number;
    handleChangePage: (event: any, page: number) => void;
    handleChangeRowsPerPage: (event: any) => void;
}

interface IOrdersShowProps {
    id: string;
    orderNo: string;
    orderTime: string;
    amount: string;
    payment: string;
    payTime: string;
    status: string;
    operation: string;
}

const OrderAdminList = (props: IOrderAdminListProps) => {
    const { classes, title, loading, list, selected, labels, isSelected, handleClick, handleSelectAllClick  } = props;
    console.log(isSelected('1'))
    return (
        <div>
            {
                loading ? <CircularUnderLoad /> :
                    <div>
                        <Typography variant='h5' component='h3'>
                            {title}
                        </Typography>
                        <Paper className={classes.root}>
                            <Table className={classes.table}>
                                <EnhancedTableHead 
                                    numSelected={selected.length}
                                    labels={labels}
                                    handleSelectAllClick={(e:any) => handleSelectAllClick(e)}
                                    rowCount={list.length}
                                />
                                <TableBody>
                                    {list.map((row: IOrdersShowProps) => {
                                        return (
                                            <TableRow 
                                                key={row.id}
                                                onClick={(event:any)=>handleClick(event, row.id)}
                                                role="checkbox"
                                                aria-checked={props.isSelected}
                                                selected={isSelected()}
                                                tabIndex={-1}
                                            >
                                                <TableCell padding='checkbox'>
                                                    <Checkbox checked={isSelected(row.id)} />
                                                </TableCell>
                                                <TableCell align='right'>{row.orderNo}</TableCell>
                                                <TableCell align='right'>{row.orderTime}</TableCell>
                                                <TableCell align='right'>{row.amount}</TableCell>
                                                <TableCell align='right'>{row.payment}</TableCell>
                                                <TableCell align='right'>{row.payTime}</TableCell>
                                                <TableCell align='right'>{row.status}</TableCell>
                                                <TableCell>
                                                    {/* <Button 
                                                        color="primary" 
                                                        className={classes.button}
                                                        onClick={()=>props.history.push('/dashboard/detail')}
                                                    > */}
                                                    <Button color="primary">
                                                        详情
                                                        </Button>
                                                    <Button color="primary">
                                                        发货
                                                        </Button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>

                            <TablePagination
                                rowsPerPageOptions={[10, 25, 50]}
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
        
    )
}

export default withStyles(styles)(OrderAdminList);