import React from 'react';
import "./homeimg.css";
import ReactSwiper from 'reactjs-swiper';
// import homeBannerStore from '../../mobx/components/HomeBannerStore';


const HomeImg =  (props:any)=>{
      const items = new Array();
      const imgs = props.imgs
      console.log(imgs);
      imgs.map((key:any)=>{
            console.log(key);
      })
        
      for(let i = 0; i<imgs.length;i++){
             let obj = {image:imgs[i],link:'www.baidu.com'}
            items.push(obj)
        }
       console.log(items);
       
      const swiperOptions = {
          preloadImages: true,
          autoplay: 8000,
          autoplayDisableOnInteraction: false
        };
  return(
        <div >
              <ReactSwiper  swiperOptions={swiperOptions} showPagination items={items}  className="swiper-example"/> 
        
        </div>

  )
    
  }

export default HomeImg