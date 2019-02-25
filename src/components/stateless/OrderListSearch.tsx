import React from 'react';
import { withStyles, createStyles, FormHelperText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers';

const styles = createStyles({
    root: {
        display: 'flex',
        
    },
    grid: {
        width: '60%',
        margin: '10px'
    },
    button: {

    }
})

interface IOrderListSearchProps {
    classes: any;
    handleDateChange: (date: string) => void;
}

const OrderListSearch = (props:IOrderListSearchProps) => {
    return (
        <div className={props.classes.root}>
            <Grid container className={props.classes.grid} justify="space-around">
                {/* <DateFormatInput 
                    name='date-input' 
                    onChange={props.handleDateChange}
                />
                至
                <DateFormatInput 
                    name='date-input' 
                    onChange={props.handleDateChange}
                /> */}
            </Grid>
            <Button variant="contained" color="primary" className={props.classes.button}>
                搜索
            </Button>
            <Button color="primary" className={props.classes.button}>
                导出本页数据
            </Button>
        </div>
    )
}

export default withStyles(styles)(OrderListSearch);