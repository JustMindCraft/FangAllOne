import React from 'react';
import { Form, Checkbox, Button, Input, Message, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginForm = (props:any) => {
    return (
        <Segment>
            <Dimmer active={props.logining}>
                <Loader indeterminate>{props.isSuccess?"登录成功":"正在登录"}</Loader>
            </Dimmer>

            <Form className="App-page-form" 
            warning={props.msgType ==="warning"}  
            success={props.msgType ==="success"} 
            error={props.msgType ==="error"} 
            onSubmit={props.onSubmit}>
                <Form.Field>
                    <label>用户名</label>
                    <Input onChange={(event:any)=>props.handleInputChange(event, "username")} placeholder='用户名' />
                </Form.Field>
                <Form.Field>
                    <label>密码</label>
                    <Input onChange={(event:any)=>props.handleInputChange(event, "password")} placeholder='密码' />
                </Form.Field>
                
                <Form.Field>
                <Message 
                hidden={!props.isSubmit} 
                success={props.msgType ==="success"} 
                error={props.msgType ==="error"} 
                warning={props.msgType ==="warning"} 
                content={props.msg} />
                </Form.Field>
                {
                    !props.submitBtnHidden && 
                    <Button disabled={!props.isPassed} primary={true} type='submit'>登录</Button>

                }
                <br/>
                <Button style={{maxWidth: "500px", width: '100%'}} as={Link} to="/register" secondary={true}>注册</Button>
            </Form>
        </Segment>
        
    )
}

export default LoginForm