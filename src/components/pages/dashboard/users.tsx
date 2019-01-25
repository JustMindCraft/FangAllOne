import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';
import PcTopWithMobx from '../../withMobx/PcTopWithMobx';
import BackendLayout from '../../withMobx/BackendLayout';
import UserTable from '../../withMobx/UserTable';
import PcFooter from '../../stateless/PcFooter';


class UserAdmin extends Component {
    constructor(props:any) {
        super(props);
        
    }
   

    render(){
        return (
            <div className="App-page">
                <PcTopWithMobx />
                <BackendLayout title="用户管理">
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Search />
                        </Grid>
                        <Grid item>
                            <TextField label="搜索　用户名|手机号|邮箱|爱好" />
                        </Grid>
                    </Grid>
                    <UserTable />
                
                </BackendLayout>
                <PcFooter />
            </div>
        )
    }
}

export default UserAdmin;