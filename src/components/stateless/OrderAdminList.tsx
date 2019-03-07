import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import CircularUnderLoad from './CircularUnderLoad';
import EnhancedTableHead from './EnhancedTableHead';

const styles = createStyles({
    root: {
        width: '100%',
        overflow: 'auto',
        margin: '20px',
        backgroundColor: '#fff',
    },
    table: {

    },
    button: {
        margin: '2px'
    }
})

// let id = 0;
// function createdData(orderNo: any, orderTime: string, amount: any, payment: any, payTime: any, status: any) {
//     id += 1;
//     return { id, orderNo, orderTime, amount, payment, payTime, status }
// }

// const rows = [
//     { id: 'orderNo', label: '订单号' },
//     { id: 'orderTime', label: '下单时间' },
//     { id: 'amount', label: '金额' },
//     { id: 'payment', label: '支付方式' },
//     { id: 'payTime', label: '支付时间' },
//     { id: 'status', label: '订单状态' },
//     { id: 'operatiom', label: '操作' },
// ]

// const data = [
//     createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
//     createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
//     createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
//     createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
//     createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
//     createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
//     createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
// ]

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

interface IOrdersShow {
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
                                {/* <TableHead className={classes.head}>
                                    <TableRow>
                                        <TableCell>
                                            <Checkbox
                                                checked={props.numSelected === props.rowCount}
                                                onChange={props.handleSelectAllClick}
                                            />
                                        </TableCell>
                                        {rows.map(
                                            row => (
                                                <TableCell key={row.id}>
                                                    {row.label}
                                                </TableCell>
                                            )
                                        )}
                                    </TableRow>
                                </TableHead> */}
                                <TableBody>
                                    {list.map((row: IOrdersShow) => {
                                        return (
                                            <TableRow 
                                                key={row.id}
                                                onClick={(event:any)=>handleClick(event, row.id)}
                                                role="checkbox"
                                                aria-checked={props.isSelected}
                                                selected={isSelected()}
                                                tabIndex={-1}
                                            >
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