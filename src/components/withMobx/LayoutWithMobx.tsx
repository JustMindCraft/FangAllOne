import React from 'react';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import LibraryIcon from '@material-ui/icons/LibraryAdd'
import SettingApplicationIcon from '@material-ui/icons/SettingsApplications'
import SettingIcon from '@material-ui/icons/Settings'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Layout from '../stateless/Layout';
import { withRouter } from 'react-router';
import { Typography, Grid } from '@material-ui/core';



interface ILayoutWithMobxProps{
  history: any
}


class LayoutWithMobx extends React.Component<ILayoutWithMobxProps>{
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
      };
    
      toggleDrawer = (side:any, open:any) => () => {
        
        this.setState({
          [side]: open,
        });

      };
    render(){
      const { history } = this.props;
      const sideList = (
        <div>
          <List>
              <ListItem button key="create_app" onClick={(e)=>{history.push('/dashboard/apps/add')}}>
                <ListItemIcon><LibraryIcon /></ListItemIcon>
                <ListItemText primary='创建应用' />
              </ListItem>
              <ListItem button key="write" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='写文章' />
              </ListItem>
              <ListItem button key="wallet" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='钱包' />
              </ListItem>
              <ListItem button key="setting" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='设置' />
              </ListItem>
              
              
          </List>
          <Divider />
            <Typography color="textSecondary" variant="caption">
              &nbsp;&nbsp;&nbsp;运营管理
            </Typography>
           <List>
              <ListItem button key="activies" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='活动管理' />
              </ListItem>
              <ListItem button key="users" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='流量统计' />
              </ListItem>
         
              <ListItem button key="users_activies_static" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='活跃统计' />
              </ListItem>
              <ListItem button key="areas" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='区域统计' />
              </ListItem>
              
          </List>
           <Divider />
            <Typography color="textSecondary" variant="caption">
              &nbsp;&nbsp;&nbsp;账单订单
            </Typography>
           <List>
              <ListItem button key="orders" onClick={(e)=>{history.push('/dashboard/orders')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='订单管理' />
              </ListItem>
          
              <ListItem button key="withdraws" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='提现管理' />
              </ListItem>
          </List>
           <Divider />
            <Typography color="textSecondary" variant="caption">
              &nbsp;&nbsp;&nbsp;资料管理
            </Typography>
          <List>
              <ListItem button key="users" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='用户管理' />
              </ListItem>
              <ListItem button key="boards" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='公告管理' />
              </ListItem>
         
              <ListItem button key="apps" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='应用管理' />
              </ListItem>
        
              <ListItem button key="shops" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='店铺管理' />
              </ListItem>
         
              <ListItem button key="products" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='产品管理' />
              </ListItem>
        
              <ListItem button key="posts_categories" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='文章分类管理' />
              </ListItem>
         
              <ListItem button key="tags" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='标签管理' />
              </ListItem>
             
         
              <ListItem button key="posts" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='文章管理' />
              </ListItem>
              <ListItem button key="comments" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='评论管理' />
              </ListItem>
          </List>
          <Divider />
            <Typography color="textSecondary" variant="caption">
              &nbsp;&nbsp;&nbsp;系统
            </Typography>
          <List>
              <ListItem button key="system_module" onClick={(e)=>{history.push('/dashboard/system/module_setting')}}>
                <ListItemIcon><SettingApplicationIcon /></ListItemIcon>
                <ListItemText primary='功能设置' />
              </ListItem>
              <ListItem button key="system" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='用户认证' />
              </ListItem>
              <ListItem button key="system_setting" onClick={(e)=>{history.push('/dashboard/settings')}}>
                <ListItemIcon><SettingIcon /></ListItemIcon>
                <ListItemText primary='系统设置' />
              </ListItem>
              <ListItem button key="roles" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='角色管理' />
              </ListItem>
              <ListItem button key="permissions" onClick={(e)=>{history.push('/dashboard/users')}}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='权限管理' />
              </ListItem>
          </List>
        </div>
      );
        return (
            <Layout　toggleDrawer={this.toggleDrawer}>
                <br/>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                    >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
               
                  {this.props.children}
            </Layout>
            
        )
    }
}


export default withRouter(LayoutWithMobx as any);

