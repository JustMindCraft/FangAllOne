import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';



const TabContainer = (props:any) => {
    return(
        <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    )
}



const styles = (theme:any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});
interface IWithdrawalAdminTabProps {
    classes: any;
    handleChange: (event: any, value: number) => void;
 
    value: number;
}

const WithdrawalAdminTab = (props: IWithdrawalAdminTabProps) => {
    return(
        <div className={props.classes.root}>
            <AppBar position="static">
            <Tabs value={props.value} onChange={props.handleChange} centered>
                <Tab label="未打款" />
                <Tab label="已打款" />
                <Tab label="已撤销" />
            </Tabs>
            </AppBar>
            {props.value === 0 && <TabContainer>未打款</TabContainer>}
            {props.value === 1 && <TabContainer>已打款</TabContainer>}
            {props.value === 2 && <TabContainer>已撤销</TabContainer>}
        </div>
    )
}

export default withStyles(styles)(WithdrawalAdminTab);