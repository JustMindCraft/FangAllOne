import React from 'react';
import LayoutWithMobx from '../../withMobx/LayoutWithMobx';
import { Paper, TextField, Card, Typography, Divider } from '@material-ui/core';
import FormCardVertical from '../../stateless/FormCardVertical';
import ExpansionPanelEditor from '../../stateless/ExpansionPanelEditor';



const MyShop  = () => {
    return (
        <LayoutWithMobx>
            <FormCardVertical style={{
                width: '60%',
                paddingBottom: 100,
                maxWidth: 650,
                minWidth: 330,

            }}>
                <div>
                    <h1>设置我的店铺</h1>
                </div>
                    <br/>
                
                    <Typography color="textSecondary" gutterBottom>
                        应用信息
                    </Typography>
                    <ExpansionPanelEditor  title="店铺名称"/>
                    <ExpansionPanelEditor　title="应用LOGO"  />

                    <Divider />                  

               

            </FormCardVertical>

            
        </LayoutWithMobx>
    )
}


export default MyShop;