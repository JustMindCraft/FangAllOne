import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import { withRouter } from 'react-router';



const PcProductBuyBar = (props:any ) => {
    const {history} = props;
    return (
        <React.Fragment>
           <BottomNavigation
            showLabels
           >
                    <BottomNavigationAction color="primary"  label="收藏" icon={<HomeIcon />} />
                 <BottomNavigationAction onClick={(e:any)=>{history.push('/discover')}} label="立即购买" icon={<ExploreIcon />} />
                 </BottomNavigation>
        </React.Fragment>
        
    )
}


export default withRouter(PcProductBuyBar);