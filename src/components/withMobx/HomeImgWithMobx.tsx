import React from 'react';
import HomeImg from '../stateless/HomeImg';
import { observer, inject } from 'mobx-react';

interface IImageGetProps{
    store: any,
}
interface IImageGetState{
    images: any,
}

@observer
export default class HomeImgWithMobx extends React.Component<IImageGetProps,IImageGetState>{
    constructor(props:any){
        super(props);
        this.state = {
            images: []
        }
    }
    componentWillMount(){
        
        this.props.store.getImg()
        
    }
    componentDidMount(){
        this.getAgain()

        this.setState({
            images:this.props.store.banners
        })
    }
    getAgain(){
        this.setState({
            images:this.props.store.banners
        })
    }

    componentWillReceiveProps(){
        this.setState({
            images:this.props.store.banners
        })
    }
    render(){
        
        return (
            <HomeImg homebanners={this.state.images}/>
        )
    }
}


// export default HomeImgWithMobx as any;