import React from 'react';
import Table from '@material-ui/core/Table';
import { withStyles, createStyles, } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
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
  handleChangePage: (event: any, page: number) => void;
  handleChangeRowsPerPage: (event: any) => void;
  page: number;
  rowsPerPage: number;
  title: string;
  loading: boolean;
  list: Array<any>;
}
interface IUsersShow {
  id: string;
  username: string;
  mobile: string;
  email: string;
}

const UserAdminList = (props: IUserAdminList) => {
  const { classes, list, title, loading } = props;
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {title}
      </Typography>
      {
       loading ? '加载中' :
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>用户名</TableCell>
            <TableCell align="right">手机</TableCell>
            <TableCell align="right">邮箱</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row: IUsersShow) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      }
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={list.length}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={props.handleChangePage}
        onChangeRowsPerPage={(e: any) => props.handleChangeRowsPerPage(e)}
      />
    </Paper>
  );
}



export default withStyles(styles)(UserAdminList);