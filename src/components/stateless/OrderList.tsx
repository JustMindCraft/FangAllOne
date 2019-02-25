import React from 'react';
import { withStyles, createStyles, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';

const styles = createStyles({
    root: {
        display: 'flex',
        width: '100%',
        overflow: 'auto',
        margin: '10px'
    },
    table: {
        fontSize: '36px',
    },
    head: {
        fontStyle: 'bold'
    },
    button: {

    }
})

let id = 0;
function createdData(orderNo:any, productID:any, orderTime:string, amount:any, payment:any, payTime:any, status:any) {
    id += 1;
    return {id, orderNo, productID, orderTime, amount, payment, payTime, status}
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
    classes: any
}

const OrderList = (props:IOrderListProps) => {
    return (
        <Paper className={props.classes.root}>
            <Table className={props.classes.table}>
                    <TableHead className={props.classes.head}>
                        <TableRow>
                            <TableCell>
                                <Checkbox/>
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
                                    <Checkbox/>
                                </TableCell>
                                <TableCell align='right'>{ row.orderNo }</TableCell>
                                <TableCell align='right'>{ row.productID }</TableCell>
                                <TableCell align='right'>{ row.orderTime }</TableCell>
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
                    {/* <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowPerPageOption={[5, 10, 25]}
                                colSpan={3}
                            />
                        </TableRow>
                    </TableFooter> */}
                </Table>
        </Paper>
        // 尝试使用dx-react-grid-material-ui
        // 可以完成分页排序过滤分组编辑
    )
}

export default withStyles(styles)(OrderList);