import React from 'react';
import { Grid, Paper, withWidth, Button } from '@material-ui/core';
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
            
            {isPc? <TopBarWithMobx toggleDrawer={props.toggleDrawer} />: <MobileTopWithMobx toggleDrawer={props.toggleDrawer} />}
            <Paper style={
                {    
                    flexGrow:1,
                     overflowX: 'hidden', 
                     overflowY: 'auto',
                     height: '80%',
                     display: 'flex',
                     justifyContent: "space-around",
                    flexDirection: 'column',
                    alignItems: 'center',
                }
                }>
            <div style={{
                display: 'flex',
                justifyItems: "flex-end",
                justifyContent: "flex-end",
                flexDirection: 'row',
                
            }}>

                <InformationMsgWithMobx />
            </div>
                
            
                {props.children}
                {isPc && <PcFooter />}
            </Paper>
            {!isPc && <MobileBottom />}

        </Grid>
    )
}

export default withWidth()(Layout);