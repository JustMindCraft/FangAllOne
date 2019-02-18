import React from 'react';
import { TextField, Card, Typography, Divider, Button, CircularProgress } from '@material-ui/core';
import FormCardVertical from '../stateless/FormCardVertical';
import ExpansionPanelEditor from '../stateless/ExpansionPanelEditor';
import { observer, inject } from 'mobx-react';
import {Image, Transformation} from 'cloudinary-react';

interface ISettingWithMobxProps {
    app: any,
    msg: any,
}

@inject('app')
@inject('msg')
@observer
class SettingWithMobx extends React.Component<ISettingWithMobxProps>{
    
    componentDidMount(){
        const { app  } = this.props;
        app.getAppSetting();
    }
    onChangeAppNameFormSubmit = (e:any) => {
        const { app, msg  } = this.props;
        
        app.updateAppName((m:string)=>{
            msg.show(m);
        });
        
    }
    
    render(){
        const { app } = this.props;
        if (app.loadingSetting) {
            return (
                <FormCardVertical>
                     <CircularProgress /><br/>
                        正在载入设置
                </FormCardVertical>
            )
        }
        return(
            <FormCardVertical style={{
                width: '60%',
                paddingBottom: 100,
                minHeight: 2000,
                maxWidth: 650,
                minWidth: 330,
    
            }}>
                <div>
                    <h1>系统设置</h1>
                </div>
                    <br/>
                
                    <Typography color="textSecondary" gutterBottom>
                        基本
                    </Typography>
                    <ExpansionPanelEditor  title="应用名称" onSubmit={this.onChangeAppNameFormSubmit}>
                        <TextField onChange={(e:any)=>app.changeName(e.target.value)} label='应用名称' value={app.name} />
                        <Button　type="submit" variant="contained" color="secondary">修改</Button>
                    </ExpansionPanelEditor>
                    <ExpansionPanelEditor　title="应用LOGO">
                        <div style={{
                            display: "flex",
                            flexDirection: 'column'
                        }}>
                        <Typography　variant="h6">
                            点击图片修改
                        </Typography>
                       
                        <Image cloudName="da7efhqvt" publicId="default.jpg">
                            <Transformation angle="-45"/>
                            <Transformation effect="trim" angle="45" crop="scale" width="600">
                            </Transformation>
                        </Image>
                        </div>
                    </ExpansionPanelEditor>
                    <ExpansionPanelEditor title="应用网址"  />
                    <ExpansionPanelEditor title="应用介绍"  />
                    <ExpansionPanelEditor title="联系方式"  />
                    <ExpansionPanelEditor title="第三方社交媒体"  />
                    <ExpansionPanelEditor　title="开启手机号验证码登录"  />
                    <ExpansionPanelEditor　title="开启邮箱验证码登录"  />
                    <Divider />
                    <br/>
    
                    <Typography color="textSecondary" gutterBottom>
                        应用短信
                    </Typography>
    
                    <ExpansionPanelEditor　title="短信秘钥"  />
                    <ExpansionPanelEditor title="短信API"  />
                    <ExpansionPanelEditor title="短信验证码接口" />
                    <Divider />
                    <br/>
                    <Typography color="textSecondary" gutterBottom>
                        邮箱设置
                    </Typography>
    
                    <ExpansionPanelEditor　title="发送服务网关设置"  />
                    <ExpansionPanelEditor title="接受服务网关设置"  />
                    <Divider />
                    <br/>
    
                    <Typography color="textSecondary" gutterBottom>
                        支付接口
                    </Typography>
    
                    <ExpansionPanelEditor　title="微信"  />
                    <ExpansionPanelEditor title="支付宝"  />
                    <Divider />
                    <br/>
    
                    <Typography color="textSecondary" gutterBottom>
                        Cloudinary图片存储
                    </Typography>
    
                    <ExpansionPanelEditor title="存储名"  />
                    <ExpansionPanelEditor title="存储秘钥"  />
                    <Divider />
                    <br/>
    
                    <Typography color="textSecondary" gutterBottom>
                        安全与维护
                    </Typography>
    
                    <ExpansionPanelEditor title="进入维护状态"  />
                    <ExpansionPanelEditor title="停止新用户注册" />
    
                  
    
               
    
            </FormCardVertical>
        )
       
    }
}


export default SettingWithMobx as any;