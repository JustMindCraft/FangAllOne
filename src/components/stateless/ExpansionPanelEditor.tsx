import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField, Button } from '@material-ui/core';

const ExpansionPanelEditor = (props:any) => {
    return (
        <ExpansionPanel expanded={props.expanded} style={{
            width: "100%"
        }}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{props.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <form style={{
                    display: 'flex',
                    alignItems: 'baseline'
                }}>
                <TextField label="修改应用名称" />
                <Button color='secondary' type="submit" variant="contained">修改</Button>
                </form>
            
            </ExpansionPanelDetails>
      </ExpansionPanel>
    )
}

export default ExpansionPanelEditor;