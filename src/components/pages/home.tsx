import React from 'react';
import { withStyles, TextField } from '@material-ui/core';
import pageStyles from './pageStyle';
import { IPageProps } from '../../interfaces/components';
import LayoutWithMobx from '../withMobx/LayoutWithMobx';

import ReactSwiper from 'reactjs-swiper';

const Home = (props:IPageProps) => {
    const {classes} = props;
        const items = [{
          image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci1.jpg',
          title: '图片1',
          link: 'http://jd.com'
        }, {
          image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci2.jpg',
          title: '图片2',
        }, {
          image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci3.jpg',
          title: '图片3',
          link: 'http://jd.com'
        }, {
          image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci4.jpg',
          title: '图片4',
        }];
       
        const swiperOptions = {
          preloadImages: true,
          autoplay: 4000,
          autoplayDisableOnInteraction: false
        };
    return (
        <LayoutWithMobx>
            <div>
            <h1>首页</h1>
            </div>
            <div >
            <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}  className="swiper-example"/>

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