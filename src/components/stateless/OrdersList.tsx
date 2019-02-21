import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
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
        width: '100%'
    },
    textField: {
        width: '200px'
    },
    table: {
        fontSize: '36px',
    },
    form: {
        display: 'flex',
    },
    search: {
        position: 'relative',
    },
    searchIcon: {
        
    },
    inputRoot: {

    },
    inputInput: {

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
    createdData(46516351, '2019.02.12', 'tony', '10086', '888', 'alipay', '2019.02.13', 'pending')
]

interface IOrdersListProps {
    classes: any
}



const OrdersList = (props:IOrdersListProps) => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <Select
                    displayEmpty
                    name="filter"
                    className={classes.selectEmpty}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem>全部订单</MenuItem>
                    <MenuItem>近一周</MenuItem>
                    <MenuItem>近一个月</MenuItem>
                </Select>
                <FormHelperText>dingdan</FormHelperText>
            </FormControl>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="订单号/买家ID/手机号"
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                />
                <Button>搜索</Button>
            </div>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Checkbox/>
                            </TableCell>
                            <TableCell>订单号</TableCell>
                            <TableCell>下单时间</TableCell>
                            <TableCell></TableCell>
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
                                    <Select>
                                        <MenuItem>详情</MenuItem>
                                        <MenuItem></MenuItem>
                                        <MenuItem></MenuItem>
                                    </Select>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
        </div>
        
    )
}

export default withStyles(styles)(OrdersList);