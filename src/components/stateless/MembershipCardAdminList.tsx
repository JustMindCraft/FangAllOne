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


let id = 0;
function createData(name: string, calories: number, fat: number, carbs: any, protein: number, status: any) {
  id += 1;
  return { id, name, calories, fat, carbs, protein, status };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '未打款'),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '未打款'),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '未打款'),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '未打款'),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '未打款')
];
const MembershipCardAdminList = (props: any) => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>用户</TableCell>
            <TableCell align="right">会员卡名字</TableCell>
            <TableCell align="right">会员卡价格</TableCell>
            <TableCell align="right">会员卡分类</TableCell>
            <TableCell align="right">会员卡描述</TableCell>
            <TableCell align="right">授卡</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}



export default withStyles(styles)(MembershipCardAdminList);