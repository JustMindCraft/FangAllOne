import React from 'react';
import { withWidth } from '@material-ui/core';
import { isWidthUp } from '@material-ui/core/withWidth';

const PcProductBuyBar = (props:any ) => {
    const isPc = isWidthUp('sm', props.width);
    return (
        <React.Fragment>
            {
                isPc && 
                <div>
                    购买
                </div>
               
            }
        </React.Fragment>
        
    )
}


export default withWidth(PcProductBuyBar as any) as any;