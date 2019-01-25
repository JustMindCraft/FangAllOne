import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Snackbar, Button, withStyles, createStyles } from '@material-ui/core';
const RegisterLink = (props:any) => <Link to="/register" {...props} />
// Non-dependent styles
const styles = createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
  });

interface ILoginFormProps {
    classes: any;
    onSubmit: (e: any) => false | undefined;
    handleInputChange: (event: any, key: string) => void;
    msg: any; 
    msgType: any; 
    startInput: any; 
    isPassed: any; 
    isSubmit: any; 
    submitBtnHidden: any; 
    logining: any; 
    isSuccess: any; 

}
const LoginForm = (props:ILoginFormProps) => {
    return (
           
            
            <form  onSubmit={props.onSubmit} className={props.classes.form}>
                <TextField
                    label="用户名"
                    onChange={(event:any)=>props.handleInputChange(event, "username")} placeholder='用户名'
                    margin="normal"
                />
                 <TextField
                    label="密码"
                    onChange={(event:any)=>props.handleInputChange(event, "password")} placeholder='用户名'
                    margin="normal"
                />
    
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={props.isSubmit}
                    autoHideDuration={6000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{props.msg}</span>}
                    />
                {
                    !props.submitBtnHidden && 
                    <Button variant="contained" color="primary"  disabled={!props.isPassed} type='submit'>登录</Button>

                }
                <Button style={{maxWidth: "500px", width: '100%'}} component={RegisterLink} variant="contained" color="secondary">注册</Button>
            </form>
        
    )
}


export default withStyles(styles)(LoginForm);