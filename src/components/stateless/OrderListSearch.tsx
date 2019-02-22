import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
            <Grid container className={classes.grid} justify="space-around">
                <DateFormatInput 
                    name='date-input' 
                    onChange={(date:string)=>props.handleDateChange}
                />
                至
                <DateFormatInput 
                    name='date-input' 
                    onChange={props.handleDateChange}
                />
            </Grid>
            <Button>
                导出本页数据
            </Button>
        </div>
    )
}

export default withStyles(styles)(OrderListSearch)