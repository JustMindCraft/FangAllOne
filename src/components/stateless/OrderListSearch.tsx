import React from 'react';
import { withStyles, createStyles, FormHelperText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers';

const styles = createStyles({
    grid: {
        width: '60%',
        margin: '10px'
    },
    button: {

    }
})

interface IOrderListSearchProps {
    classes: any;
    handleDateChange: (date: any) => void;
    handleTimeChange: (time: any) => void;
    date: Date;
    time: Date;
}

const OrderListSearch = (props:IOrderListSearchProps) => {
    return (
        <div>
            <Grid container className={props.classes.grid} justify="space-around">
                <Grid item xs={12}>
                    <DateFormatInput
                        label="起始日期"
                        name="date-input"
                        value={props.date}
                        onChange={props.handleDateChange}
                    />
                    <TimeFormatInput
                        label="起始时间"
                        name="time-input"
                        value={props.time}
                        onChange={props.handleTimeChange}
                    />
                    至
                    <DateFormatInput
                        label="终止日期"
                        name="date-input"
                        value={props.date} 
                        onChange={props.handleDateChange}
                    />
                    <TimeFormatInput
                        label="终止时间"
                        name="time-input"
                        value={props.date}
                        onChange={props.handleTimeChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" className={props.classes.button}>
                搜索
            </Button>
            <Button color="primary" className={props.classes.button}>
                导出
            </Button>
        </div>
    )
}

export default withStyles(styles)(OrderListSearch);