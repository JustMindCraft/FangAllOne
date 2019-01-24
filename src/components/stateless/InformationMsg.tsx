import React from 'react';
import {Button, Header, Segment, TransitionablePortal } from 'semantic-ui-react'
const InformationMsg = (props:any) => {
    
    return  (
        <div>
            
            <TransitionablePortal>
                    <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
                    <Header>This is a controlled portal</Header>
                    <p>Portals have tons of great callback functions to hook into.</p>
                    <p>To close, simply click the close button or click away</p>
                    </Segment>
        </TransitionablePortal>
        </div>
       
    )
   
}

export default InformationMsg;