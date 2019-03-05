import React from 'react';
import LayoutWithMobx from '../withMobx/LayoutWithMobx';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@material-ui/core';

const ProductPage  = () => {
    return (
        <LayoutWithMobx>
             <Carousel>
                <div>
                    <img src="https://res.cloudinary.com/ddycd5xyn/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1551431551/y0pva8j79xfxma8fr7sy.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/ddycd5xyn/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1551082939/qcgqvbjfkshpczitsli1.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/ddycd5xyn/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1551334584/vsbpmqkhowfvntc35dvd.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <div style={{
                position: 'relative',
                marginBottom: 300,
            }}>
                <h2>免费会员卡</h2>
                <h5>free freee</h5>
                <Typography>
                    商品详细情况
                </Typography>
            </div>
            
        </LayoutWithMobx>
    )
}


export default ProductPage;