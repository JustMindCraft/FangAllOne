import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const RegisterLink = (props:any) => <Link to="/dashboard/product" {...props} />
interface ILoginFormProps {
  classes: any;

}

const styles = createStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 5,
    background: 'rgb(236, 236, 236)'
  },

  btnstyle: {
    marginLeft: 5
  },
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },

});



let id = 0;

function createData(name: string, calories: number, fat: number, carbs: any, protein: number) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const MyShopAdminList = (props: ILoginFormProps) => {
  const { classes } = props;

  return (
    <div style={{ width: '90%' }}>
      <h2>我的店铺</h2>
      <div style={{ margin: '5px', border: '1px solid #aaa', display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '100%', border: '1px solid blue', display: 'flex', flexDirection: 'row' }}>
          <div style={{ padding: '10px' }}>
            <Grid container alignItems="center">
              <Avatar alt="Remy Sharp" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className={classes.bigAvatar} />
            </Grid>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <div style={{ padding: '3px' }}><span style={{ fontSize: '20px' }}>万人车汇自营店</span></div>
            <div style={{ padding: '3px', color: 'rgba(0,0,0,.45)' }}><span style={{ fontSize: '14px' }}>店铺描述:</span><span style={{ fontSize: '12px' }}>&nbsp;&nbsp;这是万人车汇平台官方店这是万人车汇平台官方店这是万人车汇平台官方店这是万人车汇平台官方店这是万人车汇平台官方店这是万人车汇平台官方店这是万人车汇平台官方店</span></div>
            <div style={{ padding: '3px', color: 'rgba(0,0,0,.45)' }}><span style={{ fontSize: '14px' }}>联系电话:</span><span style={{ fontSize: '12px' }}>&nbsp;&nbsp;18628845121</span></div>
            <div style={{ padding: '3px', color: 'rgba(0,0,0,.45)' }}><span style={{ fontSize: '14px' }}>店主:</span><span style={{ fontSize: '12px' }}>&nbsp;&nbsp;zhoushixiong</span></div>


          </div>
        </div>
        <div style={{ width: '100%', height: '40px' }}>
          <Button variant="outlined" size="medium" color="primary" className={classes.btnstyle}>
            发布商品
                </Button>
          <Button variant="outlined" size="medium" color="primary" className={classes.btnstyle}>
            店铺编辑
                </Button><Button variant="outlined" size="medium" color="primary" className={classes.btnstyle}>
            关闭店铺
                </Button>

        </div>
        <div style={{ width: '100%', height: '400px', border: '1px solid yellow' }}>

          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat (g)</TableCell>
                <TableCell align="right">Carbs (g)</TableCell>
                <TableCell align="right">Protein (g)</TableCell>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}




export default withStyles(styles)(MyShopAdminList);