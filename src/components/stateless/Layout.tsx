import React from 'react';
import { Grid, Paper, withWidth } from '@material-ui/core';
import PcFooter from './PcFooter';
import { isWidthUp } from '@material-ui/core/withWidth';
import MobileBottom from './MobileBottom';
import InformationMsgWithMobx from '../withMobx/InformationMsgWithMobx';
import TopBarWithMobx from '../withMobx/TopBarWithMobx';
import MobileTopWithMobx from '../withMobx/MobileTopWithMobx';





const Layout = (props: any) => {
    const isPc = isWidthUp('sm', props.width);
    
    return (
        <Grid container 
        spacing={0}  
        alignItems="stretch"
        direction="column"
        justify="space-between"
        style={{height:"100%", overflow: 'hidden'}}
       
        >
                <InformationMsgWithMobx />
            
            {isPc? <TopBarWithMobx toggleDrawer={props.toggleDrawer} />: <MobileTopWithMobx toggleDrawer={props.toggleDrawer} />}
            <Paper style={
                {    
                     overflowX: 'hidden', 
                     overflowY: 'auto',
                     display: 'flex',
                     justifyContent: "space-between",
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: "100%",
                    flex: 1,
                }
                }>
         

                
            
                {props.children}
                <br/>
                <div style={{
                    flexGrow: 1
                }}>
                {isPc && <PcFooter />}
                </div>
                
            </Paper>
            
           
            {!isPc && <MobileBottom />}

        </Grid>
    )
}

export default withWidth()(Layout);