import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';
import PcTopWithMobx from '../../withMobx/PcTopWithMobx';
import BackendLayout from '../../withMobx/BackendLayout';
import UserTable from '../../withMobx/UserTable';
import PcFooter from '../../stateless/PcFooter';
import Layout from '../../stateless/Layout';


class UserAdmin extends Component {
    constructor(props:any) {
        super(props);
        
    }
   

    render(){
        return (
            <Layout>
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
            </Layout>
        )
    }
}

export default UserAdmin;