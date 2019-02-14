import React from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import { Paper, TextField, Card, Typography, Divider } from '@material-ui/core';
import FormCardVertical from '../../stateless/FormCardVertical';
import ExpansionPanelEditor from '../../stateless/ExpansionPanelEditor';


const SettingPage  = () => {
    return (
        <LayoutWithMobx>
           
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
                        应用信息
                    </Typography>
                    <ExpansionPanelEditor  title="应用名称"/>
                    <ExpansionPanelEditor　title="应用LOGO"  />
                    <ExpansionPanelEditor title="应用网址"  />
                    <ExpansionPanelEditor title="应用介绍"  />
                    <ExpansionPanelEditor title="联系方式"  />
                    <ExpansionPanelEditor title="第三方社交媒体"  />
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
                        支付接口
                    </Typography>

                    <ExpansionPanelEditor　title="微信"  />
                    <ExpansionPanelEditor title="支付宝"  />
                    <Divider />
                    <br/>

                    <Typography color="textSecondary" gutterBottom>
                        Cloudinary图片存储
                    </Typography>

                    <ExpansionPanelEditor　title="接口"  />
                    <ExpansionPanelEditor title="存储名"  />
                    <ExpansionPanelEditor title="存储秘钥"  />
                    <Divider />
                    <br/>

                    <Typography color="textSecondary" gutterBottom>
                        安全与维护
                    </Typography>

                    <ExpansionPanelEditor　title="应用秘钥"  />
                    <ExpansionPanelEditor title="进入维护状态"  />
                    <ExpansionPanelEditor title="停止新用户注册" />

                  

               

            </FormCardVertical>

                
           
           
        </LayoutWithMobx>
    )
}


export default SettingPage;