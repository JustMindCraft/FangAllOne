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
import Paper from '@material-ui/core/Paper'

const styles = createStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    form: {
        display: 'flex',
    },
    search: {
        position: 'relative',
    },
    searchIcon: {
        
    }
})

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
            <Paper>
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
                </Table>
            </Paper>
        </div>
        
    )
}

export default withStyles(styles)(OrdersList);