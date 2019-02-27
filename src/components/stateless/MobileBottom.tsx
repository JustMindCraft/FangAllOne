import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DiscoverIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import UserIcon from '@material-ui/icons/Person';


const MobileBottom = (props: any) => {
    return (
        <BottomNavigation
            showLabels
        >
            <BottomNavigationAction label="发现" icon={<DiscoverIcon />} />
            <BottomNavigationAction label="消息" icon={<MessageIcon />} />
            <BottomNavigationAction label="我" icon={<UserIcon />} />
        </BottomNavigation>
    )
}


export default MobileBottom