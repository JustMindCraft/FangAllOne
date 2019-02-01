import React, {Component} from 'react';
import { Header, Segment, TransitionablePortal } from 'semantic-ui-react'
import { observer, inject } from 'mobx-react';
import { Snackbar } from '@material-ui/core';


interface IMsgProps{
    msg: any
}
@inject('msg')
@observer
class InformationMsgWithMobx extends Component<IMsgProps> {
  
    render(){
        
        const { open, header, content } = this.props.msg 

        return (
                
           
          <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                style={{
                    zIndex: 2000,
                    top: '66px !important',
                }}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
          message={<span id="message-id">{header}<br/>{content}</span>}
          />
           
        )
    }
}

export default InformationMsgWithMobx as any;