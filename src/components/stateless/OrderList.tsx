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
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

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

let id = 0;
function createdData(orderNo: any, orderTime: string, amount: any, payment: any, payTime: any, status: any) {
    id += 1;
    return { id, orderNo, orderTime, amount, payment, payTime, status }
}

const rows = [
    { id: 'orderNo', label: '订单号' },
    { id: 'orderTime', label: '下单时间' },
    { id: 'amount', label: '金额' },
    { id: 'payment', label: '支付方式' },
    { id: 'payTime', label: '支付时间' },
    { id: 'status', label: '订单状态' },
    { id: 'operatiom', label: '操作' },
]

const data = [
    createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
    createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
    createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
    createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
    createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
    createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
    createdData('46516351', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
]

interface IOrderListProps {
    classes: any;
    numSelected: number;
    rowCount: number;
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

const OrderList = (props: IOrderListProps) => {
    const { classes, title, list, selected, labels, isSelected, handleClick, handleSelectAllClick  } = props;
    console.log(isSelected('1'))
    return (
            <div>
                <Typography variant='h5' component='h3'>
                    {title}
                </Typography>
                <Paper className={classes.root}>
                    <div>
                        <Toolbar>
                            <div className={classes.title}>
                                {props.numSelected > 0 ? (
                                    <Typography color="inherit" variant="subtitle1">
                                        {props.numSelected} selected
                                    </Typography>
                                ) : (
                                        <Typography variant="h6" id="tableTile">
                                            订单列表
                                    </Typography>
                                    )}
                            </div>
                            <div className={classes.actions}>
                                {props.numSelected > 0 ? (
                                    <Tooltip title="Delete">
                                        <IconButton aria-label="Delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                ) : (
                                        <Tooltip title="Filter list">
                                            <IconButton aria-label="Filter list">
                                                <FilterListIcon />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                            </div>
                        </Toolbar>
                    </div>

                    <Table className={classes.table}>
                        <TableHead className={classes.head}>
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
                        </TableHead>
                        <TableBody>
                            {data.map(n => (
                                // <TableRow 
                                //     key={n.id}
                                //     onClick={(key:any)=>props.handleClick(key)}
                                //     role="checkbox"
                                //     aria-checked={props.isSelected}
                                //     selected={props.isSelected}
                                //     tableIndex={-1}
                                // >
                                //     <TableCell padding="checkbox">
                                //         <Checkbox cheacked={props.isSelected}/>
                                <TableRow>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell align='right'>{n.orderNo}</TableCell>
                                    <TableCell align='right'>{n.orderTime}</TableCell>
                                    <TableCell align='right'>{n.amount}</TableCell>
                                    <TableCell align='right'>{n.payment}</TableCell>
                                    <TableCell align='right'>{n.payTime}</TableCell>
                                    <TableCell align='right'>{n.status}</TableCell>
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
                            ))}
                        </TableBody>
                    </Table>

                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50]}
                        component="div"
                        count={data.length}
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
        
    )
}

export default withStyles(styles)(OrderList);