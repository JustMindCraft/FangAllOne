import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import dataContainer from '../../mobx/DataContainer';

const styles = createStyles({
    root: {
        width: '100%',
        margin: '20px',
        overflow: 'auto'
    },
    head: {
        
    }
})

const rows = [
    {label: '商品ID'},
    {label: '商品名'},
    {label: '单价'},
    {label: '数量'},
    {label: '金额'}

]

let id = 0;
function createdData(productNo: any, productName: string, price: any,quantity: any, amount: any) {
    id += 1;
    return {id, productNo, productName, price, quantity, amount}
}

const data = [
    createdData('14gj5nf', '鞋子', '78', '1', '78'),
]

interface IOrderDetailProps {
    classes: any;
}

const OrderDetail = (props: IOrderDetailProps) => {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <div>
                <Typography variant='h6'>
                    订单:
                </Typography>
                <Grid container>
                    <Grid item>
                        订单号
                    </Grid>
                    <Grid item>
                        订单状态:代发货
                    </Grid>
                    <Grid item>
                        发货
                    </Grid>
                </Grid>
            </div>
            <Divider variant='middle' />
            <div>
                <Typography variant='h6'>
                    用户信息：
                </Typography>
                <Grid container>
                    <Grid item>
                        用户姓名：张三
                    </Grid>
                    <Grid item>
                        用户ID:113213
                    </Grid>
                    <Grid item>
                        联系方式：10086
                    </Grid>
                    <Grid item>
                        地址：某个地方
                    </Grid>
                </Grid>
            </div>
            <Divider variant='middle' />
            <div>
                <Typography variant='h6'>
                    商品清单：
                </Typography>
                <Table>
                    <TableHead className={classes.head}>
                        <TableRow>
                            {rows.map(
                                row => (
                                    <TableCell>
                                        {row.label}
                                    </TableCell>
                                )
                            )}
                        </TableRow>                    
                    </TableHead>
                    <TableBody>
                        {data.map(n => (
                            <TableRow>
                                <TableCell align='right'>{n.productNo}</TableCell>
                                <TableCell align='right'>{n.productName}</TableCell>
                                <TableCell align='right'>{n.price}</TableCell>
                                <TableCell align='right'>{n.quantity}</TableCell>
                                <TableCell align='right'>{n.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    )
}

export default withStyles(styles)(OrderDetail);