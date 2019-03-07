import React from 'react';
import Table from '@material-ui/core/Table';
import { withStyles, createStyles, } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import CircularUnderLoad from '../stateless/CircularUnderLoad';
import EnhancedTableHead from '../stateless/EnhancedTableHead';
import Checkbox from '@material-ui/core/Checkbox';
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
  selected: Array<any>;
  labels: Array<any>;
  isSelected: any;
  handleClick: (event: any, id: any) => void;
  handleSelectAllClick: (event: any) => void;
}
interface IUsersShow {
  id: string;
  username: string;
  mobile: string;
  email: string;
}

const UserAdminList = (props: IUserAdminList) => {
  const { classes, list, title, loading, selected, labels, isSelected, handleSelectAllClick, handleClick } = props;
  return (
    <div>
      {
        loading ? <CircularUnderLoad /> :
          <div>
            <Typography variant="h5" component="h3">
              {title}
            </Typography>

            <Paper className={classes.root}>
              <Table className={classes.table}>
                <EnhancedTableHead numSelected={selected.length} labels={labels} handleSelectAllClick={(e: any) => handleSelectAllClick(e)} rowCount={list.length} />
                <TableBody>
                  {list.map((row: IUsersShow) => (
                    <TableRow key={row.id} role="checkbox" aria-checked={isSelected()} tabIndex={-1}
                    selected={isSelected()}
                    onClick={(event: any) => handleClick(event, row.id)}>
                     <TableCell padding="checkbox">
                                                    <Checkbox checked={isSelected(row.id)} />
                                                </TableCell>
                      <TableCell component="th" scope="row">
                        {row.username}
                      </TableCell>
                      <TableCell align="right">{row.mobile}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

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
          </div>
      }
    </div>
  );
}



export default withStyles(styles)(UserAdminList);