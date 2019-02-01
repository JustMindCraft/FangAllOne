import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Snackbar, Button, withStyles, createStyles, CircularProgress } from '@material-ui/core';
const RegisterLink = (props:any) => <Link to="/register" {...props} />
// Non-dependent styles
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

}
const SMSLoginForm = (props:ILoginFormProps) => {
    return (
           
            
            <form  onSubmit={props.onSubmit} className={props.classes.form}>
            <div style={{
                display: 'flex',
                alignItems: 'baseline'
            }}>
                <TextField
                    label="手机号"
                    onChange={(event:any)=>props.handleInputChange(event, "mobileInput")} placeholder='手机号'
                    margin="normal"
                    disabled={props.logining}
                />
                <Button color='primary'>获取验证码</Button>
            </div>
                 <TextField
                    label="验证码"
                    onChange={(event:any)=>props.handleInputChange(event, "smsInput")} placeholder='密码'
                    margin="normal"
                    type="password"
                    disabled={props.logining}
                />
    
                
                {
                    !props.submitBtnHidden && 
                    <Button variant="contained" color="primary"  disabled={!props.isPassed || props.logining} type='submit'>
                    {
                        props.logining ? <CircularProgress size={24} /> : '免注册登录'
                    }
                    </Button>

                }
                <br/>
                <div>
                <Button style={{ width: '100%', textDecoration: 'none'}} component={RegisterLink} variant="contained" color="secondary">注册</Button>

                </div>
            </form>
        
    )
}


export default withStyles(styles)(SMSLoginForm);