import React from 'react';
import Table from '@material-ui/core/Table';
import { withStyles, createStyles, } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
const styles = createStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    margin: '10px',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: '2px'
  }
});

interface IUserAdminList {
  classes: any;
  title: string;
  loading: boolean;
  list: Array<any>;
}
let id = 0;
function createData(name: string, calories: number, fat: number, carbs: any, protein: number, status: any, action: string) {
  id += 1;
  return { id, name, calories, fat, carbs, protein, status, action };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '未打款', '操作'),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '未打款', '操作'),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '未打款', '操作'),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '未打款', '操作'),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '未打款', '操作')
];
const UserAdminList = (props: IUserAdminList) => {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>用户</TableCell>
            <TableCell align="right">银行卡号</TableCell>
            <TableCell align="right">金额</TableCell>
            <TableCell align="right">姓名</TableCell>
            <TableCell align="right">时间</TableCell>
            <TableCell align="right">状态</TableCell>
            <TableCell align="right">操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary" className={classes.button}>
                  {row.action}
                </Button>
                <Button variant="contained" color="primary" className={classes.button}>
                  {row.action}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}



export default withStyles(styles)(UserAdminList);