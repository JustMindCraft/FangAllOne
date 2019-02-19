import React from 'react';
import HomeImg from '../stateless/HomeImg';
import { observer, inject } from 'mobx-react';

interface IImageGetProps{
    store: any,
}

@observer
class HomeImgWithMobx extends React.Component<IImageGetProps>{

    componentWillMount(){
        this.props.store.getImg()
    }
    render(){
        
        return (
            <HomeImg imgs={this.props.store.img}/>
        )
    }
}


export default HomeImgWithMobx as any;