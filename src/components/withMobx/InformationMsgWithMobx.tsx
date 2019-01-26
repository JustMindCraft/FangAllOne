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
                // style={{
                //     position: 'fixed',
                //     zIndex: 2000,
                //     width: "200px",
                //     top: '20%',
                //     left: '-80%'
                // }}
                autoHideDuration={6000}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
          message={<span id="message-id">{header}<br/>{content}</span>}
          />
           
        )
    }
}

export default InformationMsgWithMobx as any;