import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core';
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers';

const styles = createStyles({
    grid: {
        width: '60%',
    }
})

interface IOrderListSearchProps {
    classes: any;
    handleDateChange: (date: string) => void;
}

const OrderListSearch = (props:IOrderListSearchProps) => {
    const {classes} = props;
    return (
        <div>
            <DateFormatInput name='date-input' onChange={props.handleDateChange}/>
            <TimeFormatInput name='time-input' onChange={props.handleDateChange}/>
            至
            <DateFormatInput name='date-input' onChange={props.handleDateChange}/>
            <TimeFormatInput name='time-input' onChange={props.handleDateChange}/>
        </div>
    )
}

export default withStyles(styles)(OrderListSearch)