import React from 'react';
import { withStyles } from '@material-ui/core/styles';


import { styles } from '../../css/common'
interface IApplicationAdminWithMobx{
    classes: any,
}

class ApplicationAdminWithMobx extends React.Component<IApplicationAdminWithMobx>{
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
               <h1>我的应用</h1>
            </div>
        )
    }
}

export default  withStyles(styles)(ApplicationAdminWithMobx) as any;