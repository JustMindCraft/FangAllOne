import React from 'react';
import { withStyles, TextField } from '@material-ui/core';
import pageStyles from './pageStyle';
import { IPageProps } from '../../interfaces/components';
import LayoutWithMobx from '../withMobx/LayoutWithMobx';

const Home = (props:IPageProps) => {
    const {classes} = props;
    return (
        <LayoutWithMobx>
            <div>
            <h1>首页</h1>
            </div>
            <div >


              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <img src="https://res.cloudinary.com/da7efhqvt/image/upload/v1548776668/jinglaidi/assets/images/pearl.jpg" alt=""/>
              <br/>
              <br/>
              <br/>
            </div>
           
           
        </LayoutWithMobx>
    )
}

export default withStyles(pageStyles)(Home);