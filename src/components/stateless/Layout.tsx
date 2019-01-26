import React from 'react';
import { Grid, Paper, withWidth } from '@material-ui/core';
import PcFooter from './PcFooter';
import { isWidthUp } from '@material-ui/core/withWidth';
import MobileTop from './MobileTop';
import MobileBottom from './MobileBottom';
import TopBar from './TopBar';
import InformationMsgWithMobx from '../withMobx/InformationMsgWithMobx';

const Layout = (props: any) => {
    const isPc = isWidthUp('sm', props.width);
    console.log(isPc);
    console.log(props.width);
    return (
        <Grid container 
        spacing={0}  
        alignItems="stretch"
        direction="column"
        justify="space-between"
        style={{height:"100%", overflow: 'hidden'}}
        >
            
            {isPc? <TopBar />: <MobileTop />}
            <Paper style={{flexGrow:1, overflowX: 'hidden', overflowY: 'auto',height: '80%'}}>
            <div style={{
                display: 'flex',
                justifyItems: "flex-end",
                justifyContent: "flex-end",
                flexDirection: 'row'
                
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