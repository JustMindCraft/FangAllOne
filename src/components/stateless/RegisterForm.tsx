import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, createStyles, CircularProgress, Checkbox, FormControlLabel, withStyles } from '@material-ui/core';
const LoginLink = (props:any) => <Link to="/login" {...props} />
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

interface IRegisterFormProps {
    classes: any;
    onSubmit: (e: any) => false | undefined;
    handleInputChange: (event: any, key: string) => void;
    msgType: any; 
    startInput: any; 
    isPassed: boolean; 
    isSubmit: boolean; 
    submitBtnHidden: any; 
    logining: boolean; 
    isSuccess: boolean;
    password: string; 
    validUsername: boolean;
    usernamePassed: boolean;
    validMsgUsername: string;
    validMsgPassword: string;
    passwordPassed: boolean;
    passwordRepeat:string;
    passwordRepeatPassed: boolean;
    allPassed: boolean;

}

const RegisterForm = (props:IRegisterFormProps) => {

    
    return (
           
            <form  onSubmit={props.onSubmit} className={props.classes.form}>
                <TextField
                    required={true}
                    error={!props.usernamePassed && props.startInput}
                    label="用户名"
                    onChange={(event:any)=>props.handleInputChange(event, "username")} placeholder='用户名'
                    margin="normal"
                    disabled={props.logining}
                    helperText={props.startInput? props.validMsgUsername : ''}
                />
                 <TextField
                    required={true}
                    error={!props.passwordPassed && props.startInput}
                    label="密码"
                    onChange={(event:any)=>props.handleInputChange(event, "password")} placeholder='密码'
                    margin="normal"
                    value={props.password}
                    type="password"
                    disabled={props.logining}
                    helperText={props.startInput? props.validMsgPassword : ''}

                />
                 <TextField
                    required={true}
                    error={!props.passwordRepeatPassed && props.startInput}
                    label="重复密码"
                    type='password' onChange={(event:any)=>props.handleInputChange(event, "passwordRepeat")} placeholder='重复密码'
                    margin="normal"
                    value={props.passwordRepeat}
                    disabled={props.logining}
                    helperText={
                        props.startInput? 
                            props.passwordRepeatPassed? 
                            "密码一致"　: '两次密码不一致' 
                        : ''
                    }
                   
                />
                    <br/>
                
                {
                    !props.submitBtnHidden && 
                    <Button variant="contained" color="primary"  disabled={!props.allPassed || props.logining} type='submit'>
                    {
                        props.logining ? <CircularProgress size={24} /> : '注册并同意用户条款'
                    }
                    </Button>
                    

                }
                <div  style={{textAlign: 'center'}}>
                <br/>
                <Link to="/contact">注册协议</Link>
                </div>
                <br/>
                <div>
                <Button style={{ width: '100%', textDecoration: 'none'}} component={LoginLink} variant="contained" color="secondary">已经账户？立刻登录</Button>
                </div>
            </form>

            
        
    )
}

export default withStyles(styles)(RegisterForm) as any;