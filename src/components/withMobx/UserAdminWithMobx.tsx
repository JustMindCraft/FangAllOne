import React from 'react';
import UserAdminList from '../stateless/UserAdminList';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';

import { styles } from '../../css/common'
interface IUserAdminWithMobx{
    classes: any,
    dataContainer: any;
    msg: any;
}

class UserAdminWithMobx extends React.Component<IUserAdminWithMobx>{
    componentDidMount(){
        const { dataContainer, msg } = this.props;
        const { sourceName, setSourceName, setTitle } = dataContainer;
        setSourceName("users");
        this.getList();
        setTitle('用户列表')
    }
    getList = () =>{
        const { dataContainer, msg } = this.props;
        const { getList } = dataContainer;
        getList({sort: ['id', 'DESC'], page: 1, pagesize: 25}, (m:any)=>{
            console.log(m)
            msg.show(m);
        })
    }
    render() {
        const { classes, dataContainer  } = this.props;
        const { title, list, loading} = dataContainer;
        const { classes } = this.props;
        return(
            <div className={classes.root}>
               <UserAdminList 
                list={list}
                title={title}
                loading={loading}
               />
            </div>
        )
    }
}

export default  withStyles(styles)(UserAdminWithMobx) as any;