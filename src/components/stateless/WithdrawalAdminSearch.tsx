import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { DateFormatInput } from 'material-ui-next-pickers'
import Button from '@material-ui/core/Button';
const styles = (theme:any) => ({
  grid: {
    width: '60%',
    margin: '10px',
  },
  button: {
    margin: theme.spacing.unit,
  }
});


interface IWithdrawalAdminSearchProps {
    classes: any;
    handleDateChange: (date: string) => void;
    
}
const WithdrawalAdminSearch = (props:IWithdrawalAdminSearchProps) => {
    return(
       <div>
         <Grid container className={props.classes.grid} justify="space-around">
            时间筛选:
            <DateFormatInput name='date-input'  onChange={props.handleDateChange}/>
            -
            <DateFormatInput name='date-input'  onChange={props.handleDateChange}/>
         </Grid>
         <Button variant="contained" color="primary" className={props.classes.button}>
           导出本业数据
        </Button>
       </div>
    )
}



export default withStyles(styles)(WithdrawalAdminSearch);