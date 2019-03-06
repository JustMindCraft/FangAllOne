import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';


interface IProductShowWithMobxProps{
    match: any,
    product: any
}

@observer
class ProductShowWithMobx extends React.Component<IProductShowWithMobxProps> {
    componentWillMount(){
        const { match, product } = this.props;
        const id  = match.params.id;
        const { setId, getRemoteProductById, reset} = product;
        reset();
        setId(id);
        getRemoteProductById();

    }
    render(){
        const { product } = this.props;
        const { cover, id, name, description } = product;
        return (
        <React.Fragment>
            <Carousel>
                <div>
                    <img src={cover} />
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
                <h2>{name}</h2>
                <h5>free freee</h5>
                <Typography>
                    {description}
                </Typography>
            </div>
        </React.Fragment>
        )
        
    }
}

export default withRouter(ProductShowWithMobx as any) as any;