import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import {DateFormatInput } from 'material-ui-next-pickers'
const styles = {
  grid: {
    width: '60%',
  },
};


interface IWithdrawalAdminSearchProps {
    classes: any;
    handleDateChange: (date: string) => void;
    
}
const WithdrawalAdminSearch = (props:IWithdrawalAdminSearchProps) => {
    return(
       <div>
         <DateFormatInput name='date-input'  onChange={props.handleDateChange}/>
         <DateFormatInput name='date-input'  onChange={props.handleDateChange}/>
       </div>
    )
}



export default withStyles(styles)(WithdrawalAdminSearch);