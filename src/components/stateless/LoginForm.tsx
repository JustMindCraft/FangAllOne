import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Snackbar, Button, withStyles, createStyles, CircularProgress } from '@material-ui/core';
const RegisterLink = (props: any) => <Link to="/register" {...props} />
const styles = createStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        maxWidth: 600,
        minWidth: 277
    },
});

interface ILoginFormProps {
    classes: any;
    onSubmit: (e: any) => false | undefined;
    handleInputChange: (event: any, key: string) => void;
    msg: any;
    msgType: any;
    startInput: any;
    isPassed: boolean;
    isSubmit: boolean;
    submitBtnHidden: any;
    logining: boolean;
    isSuccess: boolean;
    password: string;

}


    
const LoginForm = (props: ILoginFormProps) => {

    return (
        <form onSubmit={props.onSubmit} className={props.classes.form}>
            <TextField
                label="用户名|手机号|邮箱"
                onChange={(event: any) => props.handleInputChange(event, "username")} placeholder='用户名|手机号|邮箱'
                margin="normal"
                disabled={props.logining}
            />
            <TextField
                label="密码"
                onChange={(event: any) => props.handleInputChange(event, "password")} placeholder='密码'
                margin="normal"
                value={props.password}
                type="password"
                disabled={props.logining}
            />

            <br />

            {
                !props.submitBtnHidden &&
                <Button variant="contained" color="primary" disabled={!props.isPassed || props.logining} type='submit'>
                    {
                        props.logining ? <CircularProgress size={24} /> : '登录'
                    }
                </Button>

            }
            <br />
            <div>
                <Button style={{ width: '100%', textDecoration: 'none' }} component={RegisterLink} variant="contained" color="secondary">注册</Button>

            </div>
        </form>

    )
}


export default withStyles(styles)(LoginForm);