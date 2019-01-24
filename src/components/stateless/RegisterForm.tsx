import React from 'react';
import { Form, Checkbox, Button, Input, Message, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RegisterForm = (props:any) => {
    return (
        <Segment>
            <Dimmer active={props.registering}>
                <Loader indeterminate>{props.isSuccess?"注册成功":"正在注册"}</Loader>
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
                    <Input  type='password' onChange={(event:any)=>props.handleInputChange(event, "password")} placeholder='密码' />
                </Form.Field>
                <Form.Field>
                    <label>重复密码</label>
                    <Input  type='password' onChange={(event:any)=>props.handleInputChange(event, "passwordRepeat")} placeholder='重复密码' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='同意' checked={true} />
                    <Link to="/">注册协议</Link>
                </Form.Field>
                <Form.Field>
                <Message 
                hidden={!props.startInput} 
                success={props.msgType ==="success"} 
                error={props.msgType ==="error"} 
                warning={props.msgType ==="warning"} 
                header={props.msgType ==="success"? "恭喜" : "注意"} content={props.msg} />
                </Form.Field>
                {
                    !props.submitBtnHidden && 
                    <Button disabled={!props.isPassed} primary={true} type='submit'>注册</Button>

                }
                <br/>
                <Button style={{maxWidth: "500px", width: '100%'}} as={Link} to="/login" secondary={true}>登录</Button>
            </Form>
        </Segment>
        
    )
}

export default RegisterForm