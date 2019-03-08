import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularUnderLoad from './CircularUnderLoad';

const styles = createStyles({
    root: {
        width: '100%',
        margin: '10px',
        overflowX: 'auto',
        backgroundColor: '#fff',
    },
    section: {
        margin: '20px'
    },
    table: {
        minWidth: '700px'
    }
})

const rows = [
    { label: '商品ID' },
    { label: '商品名' },
    { label: '单价' },
    { label: '数量' },
    { label: '金额' }

]

let id = 0;
function createdData(productNo: any, productName: string, price: any, quantity: any, amount: any) {
    id += 1;
    return { id, productNo, productName, price, quantity, amount }
}

const data = [
    createdData('14gj5nf', '鞋子', '78', '1', '78'),
    createdData('14gj5nf', '鞋子', '78', '1', '78'),
    createdData('14gj5nf', '鞋子', '78', '1', '78'),
    createdData('14gj5nf', '鞋子', '78', '1', '78'),
    createdData('14gj5nf', '鞋子', '78', '1', '78'),
]

interface IOrderDetailProps {
    classes: any;
    handleClickOpen: () => void;
    handleClose: () => void;
    open: boolean;
    orderNo: string;
    status: string;
    orderTime: string;
    loading: boolean;
}

interface IOrderProductShowProps {
    id: string;

}

const OrderDetailAdmin = (props: IOrderDetailProps) => {
    const { classes, loading,  } = props;
    return (
        <div>
            {
                loading ? <CircularUnderLoad /> :
                    <div>   
                        <Paper className={classes.root}>
                            <div className={classes.section}>
                                <Typography variant='h6'>
                                    订单:
                                </Typography>
                                <Grid container justify='center' alignItems='center'>
                                    <Grid item xs={4}>
                                        订单号:{props.orderNo}
                                    </Grid>
                                    <Grid item xs={4}>
                                        订单状态:{props.status}
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button 
                                            color='primary' 
                                            variant='outlined' 
                                            onClick={props.handleClickOpen}
                                        >
                                            发货
                                        </Button>
                                        <Dialog
                                            open={props.open}
                                            onClose={props.handleClose}
                                            aria-labelledby='form-dialog-title'
                                        >
                                            <DialogTitle id='from-dialog-title'></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    请填写快递信息
                                                </DialogContentText>
                                                <TextField
                                                    autoFocus
                                                    margin='dense'
                                                    id='deliverNo'
                                                    label='快递单号'
                                                    type='email'
                                                    fullWidth
                                                >
                                                </TextField>
                                                <TextField
                                                    autoFocus
                                                    margin='dense'
                                                    id='deliver'
                                                    label='快递'
                                                    type='email'
                                                    fullWidth
                                                >
                                                </TextField>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={props.handleClose} color='primary'>
                                                    取消
                                                </Button>
                                                <Button onClick={props.handleClose} color='primary'>
                                                    保存
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Grid>
                                </Grid>
                            </div>
                            <Divider variant='middle' />
                            <div className={classes.section}>
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
                            <div className={classes.section}>
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
                    </div>
            }
        </div>  
    )
}

export default withStyles(styles)(OrderDetailAdmin);