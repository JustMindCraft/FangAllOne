import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = createStyles({
    root: {
        width: '100%'
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
function createdData(orderNo:any, orderTime:any, amount:any, payment:any, payTime:any, status:any) {
    id += 1;
    return {id, orderNo, orderTime, amount, payment, payTime, status}
}

const rows = [
    createdData('46516351','1992.1012','1','45','25','jm')
]

interface IOrdersListProps {
    classes: any
}



const OrdersList = (props:IOrdersListProps) => {
    const {classes} = props;
    return (
        <div className={classes.root}>

            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
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
                            <TableCell>订单号</TableCell>
                            <TableCell>下单时间</TableCell>
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
                                <TableCell>{ row.orderNo}</TableCell>
                                <TableCell>{ row.orderTime}</TableCell>
                                <TableCell>{ row.amount }</TableCell>
                                <TableCell>{ row.payment }</TableCell>
                                <TableCell>{ row.payTime }</TableCell>
                                <TableCell>{ row.status }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
        </div>
        
    )
}

export default withStyles(styles)(OrdersList);