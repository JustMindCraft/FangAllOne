import React from 'react';
import { withStyles, createStyles, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const styles = createStyles({
    root: {
        width: '100%',
        overflow: 'auto',
        margin: '10px'
    },
    table: {
        fontSize: '36px',
    },
    button: {

    }
})

let id = 0;
function createdData(orderNo:number, orderTime:any, buyer:any, phoneNo:any, amount:any, payment:any, payTime:any, status:any) {
    id += 1;
    return {id, orderNo, orderTime, buyer, phoneNo, amount, payment, payTime, status}
}

const rows = [
    createdData(46516351, '2019.02.12', 'tony', '10086', '888', 'alipay', '2019.02.13', 'pending'),
    createdData(46516351, '2019.02.12', 'tony', '10086', '888', 'alipay', '2019.02.13', 'pending'),
    createdData(46516351, '2019.02.12', 'tony', '10086', '888', 'alipay', '2019.02.13', 'pending'),
    createdData(46516351, '2019.02.12', 'tony', '10086', '888', 'alipay', '2019.02.13', 'pending'),
    createdData(46516351, '2019.02.12', 'tony', '10086', '888', 'alipay', '2019.02.13', 'pending'),
    createdData(46516351, '2019.02.12', 'tony', '10086', '888', 'alipay', '2019.02.13', 'pending'),
    createdData(46516351, '2019.02.12', 'tony', '10086', '888', 'alipay', '2019.02.13', 'pending'),
    createdData(46516351, '2019.02.12', 'tony', '10086', '888', 'alipay', '2019.02.13', 'pending'),
]

interface IOrderListProps {
    classes: any
}

const OrderList = (props:IOrderListProps) => {
    return (
        <Paper className={props.classes.root}>
            <Table className={props.classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Checkbox/>
                            </TableCell>
                            <TableCell>订单号</TableCell>
                            <TableCell>下单时间</TableCell>
                            <TableCell>买家ID</TableCell>
                            <TableCell>手机号</TableCell>
                            <TableCell>金额</TableCell>
                            <TableCell>支付方式</TableCell>
                            <TableCell>支付时间</TableCell>
                            <TableCell>订单状态</TableCell>
                            <TableCell>操作</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <Checkbox/>
                                </TableCell>
                                <TableCell align='right'>{ row.orderNo}</TableCell>
                                <TableCell align='right'>{ row.orderTime}</TableCell>
                                <TableCell align='right'>{ row.buyer}</TableCell>
                                <TableCell align='right'>{ row.phoneNo}</TableCell>
                                <TableCell align='right'>{ row.amount }</TableCell>
                                <TableCell align='right'>{ row.payment }</TableCell>
                                <TableCell align='right'>{ row.payTime }</TableCell>
                                <TableCell align='right'>{ row.status }</TableCell>
                                <TableCell>
                                    <Button color="primary" className={props.classes.button}>
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
        </Paper>
        
    )
}

export default withStyles(styles)(OrderList);