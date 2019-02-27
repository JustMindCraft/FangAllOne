import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';

const styles = createStyles({
    root: {
        width: '100%',
        overflow: 'auto',
        margin: '20px'
    },
    table: {

    },
    head: {

    },
    button: {
        margin: '2px'
    }
})

let id = 0;
function createdData(orderNo: any, productID: any, orderTime: string, amount: any, payment: any, payTime: any, status: any) {
    id += 1;
    return { id, orderNo, productID, orderTime, amount, payment, payTime, status }
}

const rows = [
    createdData('46516351', '465vbsdfv', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
    createdData('46516351', '465vbsdfv', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
    createdData('46516351', '465vbsdfv', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
    createdData('46516351', '465vbsdfv', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
    createdData('46516351', '465vbsdfv', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
    createdData('46516351', '465vbsdfv', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
    createdData('46516351', '465vbsdfv', '2019.02.12', '888', 'alipay', '2019.02.13', 'pending'),
]

interface IOrderListProps {
    classes: any;
    handleChangePage: (event: any, page: number) => void;
    handleChangeRowsPerPage: (event: any) => void;
    rowsPerPage: number;
    page: number;
}

const OrderList = (props: IOrderListProps) => {
    const { classes } = props;
    return (
        <Paper className={classes.root}>

            <Table className={classes.table}>
                <TableHead className={classes.head}>
                    <TableRow>
                        <TableCell>
                            <Checkbox />
                        </TableCell>
                        <TableCell>订单号</TableCell>
                        <TableCell>商品ID</TableCell>
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
                            <TableCell>
                                <Checkbox />
                            </TableCell>
                            <TableCell align='right'>{row.orderNo}</TableCell>
                            <TableCell align='right'>{row.productID}</TableCell>
                            <TableCell align='right'>{row.orderTime}</TableCell>
                            <TableCell align='right'>{row.amount}</TableCell>
                            <TableCell align='right'>{row.payment}</TableCell>
                            <TableCell align='right'>{row.payTime}</TableCell>
                            <TableCell align='right'>{row.status}</TableCell>
                            <TableCell>
                                <Button color="primary" className={classes.button}>
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
                count={rows.length}
                rowsPerPage={props.rowsPerPage}
                page={props.page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onChangePage={props.handleChangePage}
                onChangeRowsPerPage={(e:any)=>props.handleChangeRowsPerPage(e)}
            />
        </Paper>
    )
}

export default withStyles(styles)(OrderList);