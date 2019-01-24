import React from 'react'
import { Menu, Icon, Dropdown } from 'semantic-ui-react'
import { withRouter } from 'react-router';

interface ILeftItemProps {
    key: string, active: boolean, name: string,
    onClick: Function, children: React.ReactNode,
}






const PcTop = (props:any) => {
    
    const { isLogined, username, fetching } = props.content;
    const trigger = (
        <span>
          <Icon name='user' /> halo, {username}
        </span>
      )
      
      const options = [
        {
          key: 'user',
          text: (
            <span>
              登录为<strong>{username}</strong>
            </span>
          ),
          disabled: true,
        },
        { key: 'profile', text: '个人中心', onClick: ()=>{props.history.push('/personal');} },
        { key: 'sign-out', text: '登出', onClick: ()=>{props.logout();} },
      ]
      
      const TopDrop = () => <Dropdown trigger={trigger} options={options} />
    
    const { path } = props.match
    const leftItems:Array<ILeftItemProps> = [
        { key: 'home', active: path==='/', name: '首页',  onClick: ()=>{props.history.push('/');}, children: null  },
        { key: 'about', active: path==='/about', name: '介绍', onClick: ()=>{props.history.push('/about');} , children: null},
      ]
    const rightItemNormal:Array<ILeftItemProps> = [
        { key: 'login', active: path==='/login', name: '登录', onClick: ()=>{props.history.push('/login');} , children: null},
    ]
    const rightItemLogin:Array<ILeftItemProps> = [
        { key: 'register', active: path==='/dashboard', name: '面板', onClick: ()=>{props.history.push('/dashboard');} , children: null},
        { key: 'login', active: path==='/login', name: '登录', onClick: ()=>{props.history.push('/login');} , children: <TopDrop />},
        ]
    return (
        <div style={{width: "100%",display: 'flex', flexDirection:'row', alignItems: 'baseline', justifyContent: 'space-between'}}>
            <Menu items={leftItems} />
            <Menu items={!isLogined? rightItemNormal : rightItemLogin} />
        </div>
    )
}
    

export default withRouter(PcTop)