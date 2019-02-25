import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import ExploreIcon from '@material-ui/icons/Explore';
import UserIcon from '@material-ui/icons/Person';
import { withRouter } from 'react-router';


const MobileBottom = (props:any) => {
    const { history } = props;
    return (
        <BottomNavigation
            showLabels
        >
        <BottomNavigationAction onClick={(e:any)=>{history.push('/')}} label="首页" icon={<HomeIcon />} />
        <BottomNavigationAction onClick={(e:any)=>{history.push('/discover')}} label="发现" icon={<ExploreIcon />} />
        <BottomNavigationAction onClick={(e:any)=>{history.push('/cart')}} label="购物车" icon={<MessageIcon />} />
        <BottomNavigationAction onClick={(e:any)=>{history.push('/personal')}} label="我" icon={<UserIcon />} />
      </BottomNavigation>
    )
}


export default withRouter(MobileBottom);