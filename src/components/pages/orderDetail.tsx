import React from 'react';
import LayoutWithMobx from "../withMobx/LayoutWithMobx";
import FormCardVertical from '../stateless/FormCardVertical';
import pageStyles from './pageStyle';
import { IPageProps } from '../../interfaces/components';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


class OrderDetail extends React.Component<IPageProps> {

  render(){
    const {classes} = this.props;
    return (
        <LayoutWithMobx>
                <FormCardVertical style={{
                    width:'90%',
                    paddingTop:20,
                    minWidth:318,
                    minHeight:500
                }}>
                    <Typography variant='h4' gutterBottom className={classes.title} >
                        订单管理
                    </Typography>
                </FormCardVertical>
            </LayoutWithMobx>
    )
  }
}

export default withStyles(pageStyles)(OrderDetail);