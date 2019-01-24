import React, {Component} from 'react';
import { Header, Segment, TransitionablePortal } from 'semantic-ui-react'
import { observer, inject } from 'mobx-react';


interface IMsgProps{
    msg: any
}
@inject('msg')
@observer
class InformationMsgWithMobx extends Component<IMsgProps> {
  
    render(){
        
        const { open, header, content } = this.props.msg 

        return (
                
            <TransitionablePortal  open={open}>
                    <Segment style={{ right: '5%', position: 'fixed', top: '7%', zIndex: 1000 }}>
                    <Header as="h5">{header}</Header>
                    {content}
                    </Segment>
          </TransitionablePortal>
           
        )
    }
}

export default InformationMsgWithMobx as any;