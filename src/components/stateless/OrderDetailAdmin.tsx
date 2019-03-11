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
import DefaultTableHead from './DefaultTableHead';
import CircularUnderLoad from './CircularUnderLoad';

const styles = createStyles({
    root: {
        width: '100%',
        margin: '10px',
        overflowX: 'auto',
        backgroundColor: '#fff',
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
    userName: string;
    userNo: string;
    phoneNo: string;
    address: string;
    list: Array<any>;
    labels:Array<any>;
}

interface IOrderProductShowProps {
    id: string;
    productName: string;
    productId: string;
    price: string;
    quantity: string;
    amount: string;
}

const OrderDetailAdmin = (props: IOrderDetailProps) => {
    const { classes, loading, orderNo, status, orderTime, list, labels   } = props;
    return (
        <div>
            {
                loading ? <CircularUnderLoad /> :
                    <div>   
                        <Paper className={classes.root}>
                            <Grid container spacing={16} justify='space-around'>
                                <Grid item xs={12}>
                                    <Typography variant='h5'>
                                        订单:
                                    </Typography>
                                    <Grid container justify='space-around' alignItems='center'>
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
                                                        请填写快递信息:
                                                    </DialogContentText>
                                                    <TextField
                                                        autoFocus
                                                        margin='dense'
                                                        id='deliver'
                                                        label='快递'
                                                        type='email'
                                                        fullWidth
                                                    >
                                                    </TextField>
                                                    <TextField
                                                        autoFocus
                                                        margin='dense'
                                                        id='deliverNo'
                                                        label='快递单号'
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
                                </Grid>
                                <Divider variant='middle' />
                                <Grid item xs={12}>
                                    <Typography variant='h5'>
                                        用户信息：
                                    </Typography>
                                    <Grid container justify='space-around' alignItems='center'>
                                        <Grid item xs={3}>
                                            用户姓名：{props.userName}
                                        </Grid>
                                        <Grid item xs={3}>
                                            用户ID: {props.userNo}
                                        </Grid>
                                        <Grid item xs={3}>
                                            联系方式：{props.phoneNo}
                                        </Grid>
                                        <Grid item xs={3}>
                                            地址：{props.address}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider variant='middle' />
                                <Grid item xs={12}>
                                    <Typography variant='h5'>
                                        商品清单：
                                    </Typography>
                                    <Table>
                                        <DefaultTableHead labels={labels}/>
                                        <TableBody>
                                            {list.map((row: IOrderProductShowProps) => {
                                                return (
                                                    <TableRow>
                                                        <TableCell align='right'>{row.productId}</TableCell>
                                                        <TableCell align='right'>{row.productName}</TableCell>
                                                        <TableCell align='right'>{row.price}</TableCell>
                                                        <TableCell align='right'>{row.quantity}</TableCell>
                                                        <TableCell align='right'>{row.amount}</TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
            }
        </div>  
    )
}

export default withStyles(styles)(OrderDetailAdmin);