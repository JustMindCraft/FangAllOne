import React from 'react';
import { withRouter } from 'react-router';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';



const PcProductBuyBar = (props:any ) => {
    const {history} = props;
    return (
        <React.Fragment>
          <AppBar style={
              {
                top: 'auto',
                bottom: 300,
                width: 500,
                right: 50,
                backgroundColor: 'white'
              }
          } position="fixed" color="secondary" >
                <Toolbar>
                <Button variant="outlined" color="secondary" style={
                    {
                        flex: 1
                    }
                }>
                    <KeyboardVoiceIcon  />
                    立即购买
                </Button>
                <Button variant="outlined" color="secondary" >
                    <SaveIcon  />
                    加入收藏
                </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
        
    )
}


export default withRouter(PcProductBuyBar);