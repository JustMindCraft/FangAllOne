import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers';

const styles = createStyles({
    root: {
        width: '100%',
        margin: '20px'
    },
    formcontrol: {
        width: '180px'
    },
    button: {

    }
})

interface IOrderListSearchProps {
    classes: any;
    handleDateChange: (date: any) => void;
    handleTimeChange: (time: any) => void;
    // date: Date;
    // time: Date;
    // handleInputChange: (event: any, key: string) => void;
}

const OrderListSearch = (props:IOrderListSearchProps) => {
    return (
        <div>
            <Grid container className={props.classes.root} spacing={16} justify="space-around">
                <Grid item xs={12}>
                    <TextField
                        id="query-condition"
                        label="用户ID/手机号"
                        className={props.classes.textfeild}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={props.classes.formcontrol}>
                        <InputLabel htmlFor="">订单状态</InputLabel>
                        <Select>
                            <MenuItem value="">全部</MenuItem>
                            <MenuItem value="">未付款</MenuItem>
                            <MenuItem value="">待发货</MenuItem>
                            <MenuItem value="">未完成</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={16} alignItems="center">
                        <Grid item>
                            <DateFormatInput
                                label="起始日期"
                                name="date-input"
                                onChange={props.handleDateChange}
                            />
                        </Grid>
                        <Grid item>
                            <TimeFormatInput
                                label="起始时间"
                                name="time-input"
                                onChange={props.handleTimeChange}
                            />
                        </Grid>
                        至
                        <Grid item>
                            <DateFormatInput
                                label="终止日期"
                                name="date-input"
                                onChange={props.handleDateChange}
                            />
                        </Grid>
                        <Grid item>
                            <TimeFormatInput
                                label="终止时间"
                                name="time-input"
                                onChange={props.handleTimeChange}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Button variant="contained" color="primary" className={props.classes.button}>
                        搜索
                    </Button>
                    <Button color="primary" className={props.classes.button}>
                        导出
                    </Button>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default withStyles(styles)(OrderListSearch);